import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store/store.js";
import App from "./App.js";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
