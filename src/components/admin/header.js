import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import CartContext from "./context api/cartContext";

export default function Header(props) {
  const { setStatus, setAuthor, setTag, setTime } = props
  // const cart = useContext(CartContext)[0];
  const { items } = useContext(CartContext)

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2>Posts</h2>
      <Link to={"/cart"}>
        <button className="btn btn-danger btn-sm" style={{ borderRadius: "0px", width: "50px", height: "31px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <i className="fas fa-shopping-cart"></i>
          <span style={{ fontWeight: 600 }}>{items.length}</span>
        </button>
      </Link>
      <div className="d-flex justify-content-center align-items-center">
        <div className="btn-group">
          <select class="custom-select" id="inputGroupSelect02" style={styles.select} onChange={event => setStatus(event.target.value)}>
            <option value="default">All Posts</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className="btn-group">
          <select class="custom-select" id="inputGroupSelect02" style={styles.select} onChange={event => setAuthor(event.target.value)}>
            <option value="default">All Authors</option>
            <option value="ghost">Ghost</option>
            <option value="dien">Dien</option>
          </select>
        </div>

        <div className="btn-group">
          <select class="custom-select" id="inputGroupSelect02" style={styles.select} onChange={event => setTag(event.target.value)}>
            <option value="default">All Tags</option>
            <option value="getting-started">Getting Started</option>
          </select>
        </div>

        <div className="btn-group">
          <select class="custom-select" id="inputGroupSelect02" style={styles.select} onChange={event => setTime(event.target.value)}>
            <option value="default">Sort by</option>
            <option value="published_at DESC">Newest</option>
            <option value="published_at ASC">Oldest</option>
          </select>
        </div>

        <Link to={"/post/add"}>
          <button type="button" class="btn btn-success btn-sm" style={{ borderRadius: 0, marginLeft: "60px" }}>New Post</button>
        </Link>
      </div>
    </div>
  )
}

const styles = {
  select: {
    height: "36px",
    fontSize: "14px",
    borderRadius: "0"
  }
}