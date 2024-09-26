import React from "react";

import TodoList from "./components/TodoList";

import AddTodo from "./components/AddTodo";

import { Box } from "@chakra-ui/react";

function App() {

  return (

    <Box p={5}>

      <h1>Todo List</h1>

      <AddTodo />

      <TodoList />

    </Box>

  );

}

export default App;