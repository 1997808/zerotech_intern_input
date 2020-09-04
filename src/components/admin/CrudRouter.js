import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminApi from './adminApi'
import PostDetail from './postDetail'
import CartTable from './context api/cartTable'
import CartContext from './context api/cartContext'
import api from './config/apiConfig'

export default function CrudRouter(props) {
  const [items, setItems] = useState([]);

  const emptyCart = () => {
    console.log(items)
    for (let id of items) {
      api.posts.delete({
        id: id
      })
    }
    setItems([])
    // history.push("/")
  }

  const addItem = (id) => {
    if (items.includes(id)) {
      let newCart = items.filter(item => item !== id)
      setItems(newCart)
    } else
      setItems([...items, id])
  }

  return (
    <CartContext.Provider value={{ items, addItem, emptyCart }}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <AdminApi />
            </Route>
            <Route path="/cart">
              <CartTable />
            </Route>
            <Route path="/post/:id">
              <PostDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContext.Provider>
  );
}