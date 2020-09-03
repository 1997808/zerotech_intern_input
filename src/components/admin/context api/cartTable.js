import React, { useEffect, useState, useContext } from 'react'
import GhostAdminAPI from '@tryghost/admin-api'
import CartItem from './cartItem'
import CartContext from "./cartContext";

export default function CartTable(props) {
  const [cartData, setCartData] = useState([])
  // const cart = useContext(CartContext)[0];
  const { items, emptyCart } = useContext(CartContext)

  const api = new GhostAdminAPI({
    url: 'http://145.239.255.230:2368',
    key: '5f3fe4a363f80d00015a9377:47e6710efb8b0d584869e6444fc0e38b689e2d33079995783a902603ea0dfd4f',
    version: "v3"
  });

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