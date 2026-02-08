import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store/store.js";
import App from "./App.js";

import "./styles/index.scss";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
);
