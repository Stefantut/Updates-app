import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../routes/Welcome";
import Login from "../routes/Login";
import Register from "../routes/Register";
import UpdatesByDate from "../routes/UpdatesByDate";
import UpdatesByTags from "../routes/UpdatesByTags";
import App from "../routes/App";
import NotFound from "../routes/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/app/updatesbydate" component={UpdatesByDate} />
      <Route exact path="/app/updatesbytags" component={UpdatesByTags} />
      <Route path="/app/:username" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
