import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions";

import { Input, Button, HStack } from "@chakra-ui/react";

const AddTodo = () => {

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {

    if (title.trim()) {

      dispatch(addTodo(title));

      setTitle("");

    }

  };

  return (

    <HStack mb={4}>

      <Input

        placeholder="Add a new todo"

        value={title}

        onChange={(e) => setTitle(e.target.value)}

      />

      <Button onClick={handleAddTodo}>Add</Button>

    </HStack>

  );

};

export default AddTodo;