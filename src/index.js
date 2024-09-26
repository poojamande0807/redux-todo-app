import React from "react";

import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore } from "redux";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

import todoReducer from "./redux/reducer";

const store = createStore(todoReducer);

ReactDOM.render(

  <Provider store={store}>

    <ChakraProvider>

      <App />

    </ChakraProvider>

  </Provider>,

  document.getElementById("root")

);