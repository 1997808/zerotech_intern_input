import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import CartContext from "./context api/cartContext";

export default function TableItem(props) {
  const { item } = props
  const [cart, setCart] = useContext(CartContext);

  let author = ""
  let tag = ""
  if (item.authors[0].hasOwnProperty("name")) {
    author = item.authors[0].name
  }
  if (item.tags.length === 0) {
    tag = ""
  } else tag = item.tags[0].name

  return (
    <tr>
      <td>
        <Link to={"/post/" + item.id}>
          <p style={{ fontWeight: 600, margin: 0 }}>{item.title}</p>
          <p style={{ fontSize: "12px", margin: 0 }}>{`By ${author} ${tag !== "" ? " in " + tag : ""}`}</p>
        </Link>
      </td>
      <td><p style={{ display: "inline-block", background: "#ddd", color: "#666", padding: "2px", fontWeight: 600, fontSize: "12px", margin: 0 }}>{item.status.toUpperCase()}</p></td>
      <td>{Math.round((Date.now() - Date.parse(item.updated_at)) / 86400000) + " days ago"}</td>
      <td className="d-flex justify-content-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={item.id} checked={cart.includes(item.id) ? true : false}
            onChange={() => {
              let { id } = item
              if (cart.includes(id)) {
                let newCart = cart.filter(item => item !== id)
                setCart(newCart)
              } else setCart([...cart, item.id])
            }}
          />
        </div>
      </td>
    </tr>
  )
}
