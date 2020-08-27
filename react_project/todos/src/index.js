import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./containers/ContainerListBoard.js";
import reducers from "./reducers";
import Board from "./containers/ContainerBoard";
import { loadState, saveState } from "./localStorage/index.js";

// Main (but_create, list_tasks) => tasks(list, but_create_task) => create_window
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

const store = createStore(
  reducers,
  persistedState ? persistedState : initialValue
);

store.subscribe(() => {
  saveState(store.getState());
});

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
