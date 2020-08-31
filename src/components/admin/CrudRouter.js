import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminApi from './adminApi'
import PostDetail from './postDetail'

export default function CrudRouter(props) {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <AdminApi />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}