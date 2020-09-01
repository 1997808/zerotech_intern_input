import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  const { setStatus, setAuthor, setTag, setTime } = props

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Posts</h2>
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