import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";

import "./scss/styles.scss";
import * as serviceWorker from "./utils/serviceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
