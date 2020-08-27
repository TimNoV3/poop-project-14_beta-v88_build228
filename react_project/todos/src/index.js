import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./containers/ContainerListBoard.js";
import reducers from "./reducers";
import Board from "./containers/ContainerBoard";
import { loadState, saveState } from "./localStorage/index.js";

const initialValue = [
  {
    name: "task",
    array: [
      {
        name: "name1",
        array: [
          { name: "task_1", completed: false },
          { name: "task_2", completed: true },
        ],
      },
    ],
  },
];
const persistedState = loadState();

/* eslint-disable */
const saveStateInLocalStorage = state => next => action => {
  const result = next(action);
  saveState(store.getState());
  console.log(state.getState());
  return result
} 
/* eslint-enable */

const store = createStore(
  reducers,
  persistedState ? persistedState : initialValue,
  applyMiddleware(saveStateInLocalStorage)
);



const General = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={Board} />
      </Switch>
    </main>
  );
};

render(
  <Provider store={store}>
    <BrowserRouter>
      <General />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
