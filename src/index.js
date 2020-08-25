import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import "./scss/styles.scss";
import * as serviceWorker from "./utils/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
