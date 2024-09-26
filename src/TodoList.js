import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { toggleTodo, deleteTodo } from "../redux/actions";

import { Box, Checkbox, Button, VStack } from "@chakra-ui/react";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <VStack align="start">
      {todos.map((todo) => (
        <Box key={todo.id} display="flex" alignItems="center">
          <Checkbox
            isChecked={todo.status}
            onChange={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.title}
          </Checkbox>

          <Button
            ml={2}
            colorScheme="red"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </Button>
        </Box>
      ))}
    </VStack>
  );
};

export default TodoList;
