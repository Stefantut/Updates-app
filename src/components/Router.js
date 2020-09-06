import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "../utils/Context";

import Welcome from "../routes/Welcome";
import Login from "../routes/Login";
import Register from "../routes/Register";
import UpdatesByDate from "../routes/UpdatesByDate";
import MyUpdates from "../routes/MyUpdates";
import UpdatesByTags from "../routes/UpdatesByTags";
import App from "../routes/App";
import NotFound from "../routes/NotFound";

import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/updates/updatesbydate"
            component={UpdatesByDate}
          />
          <Route
            exact
            path="/updates/updatesbytags"
            component={UpdatesByTags}
          />
          <Route exact path="/updates/myupdates" component={MyUpdates} />
          <Route path="/app/:username" component={App} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};
export default Router;
