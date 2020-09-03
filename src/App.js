import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormValidation from './components/formValidation/formMaterial'
import FormReact from './components/formReact/formReact'
import FormPosts from './components/content/formPosts'
import CrudRouter from './components/admin/CrudRouter'
import ContextApi from './components/context api/app'

export default function App() {
  return (
    <Router>
      <ul class="nav justify-content-center" style={{ marginBottom: "60px", fontSize: "10px" }}>
        <li class="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/context_api">ContextApi</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/form_validation">FormValidation</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/form_posts">FormPosts</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/form_react">FormReact</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/">
            <CrudRouter />
          </Route>
          <Route path="/context_api">
            <ContextApi />
          </Route>
          <Route path="/form_validation">
            <FormValidation />
          </Route>
          <Route path="/form_posts">
            <FormPosts />
          </Route>
          <Route path="/form_react">
            <FormReact />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}