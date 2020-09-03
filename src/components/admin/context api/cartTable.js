import React, { useEffect, useState, useContext } from 'react'
import CartItem from './cartItem'
import CartContext from "./cartContext";
import api from "../config/apiConfig"

export default function CartTable(props) {
  const [cartData, setCartData] = useState([])
  // const cart = useContext(CartContext)[0];
  const { items, emptyCart } = useContext(CartContext)

  useEffect(() => {
    api.posts
      .browse({
        include: 'tags,authors',
        fields: 'id, title, status, custom_excerpt, created_at, updated_at',
      })
      .then((posts) => {
        setCartData(posts)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return (
    <>
      <button type="button" class="btn btn-danger" onClick={emptyCart}>Delete All</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Last Update</th>
            <th scope="col">Checkbox</th>
          </tr>
        </thead>
        <tbody>
          {cartData.filter(item => items.includes(item.id)).map(item =>
            <CartItem item={item} key={item.id} />
          )}
        </tbody>
      </table>
    </>
  )
}