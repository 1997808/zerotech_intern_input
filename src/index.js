import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import FormPosts from '../src/api/formPosts'
import AdminApi from './components/admin/adminApi'
// import FormReact from '../src/components/formReact'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AdminApi />
    {/* <FormPosts /> */}
    {/* <FormReact /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
