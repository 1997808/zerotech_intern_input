import React from 'react'

export default function Header(props) {
  const { addPost } = props
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Posts</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="btn-group">
          <button style={{ borderRadius: 0 }} type="button" className="btn btn-danger btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Posts</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" >Action</button>
            <button className="dropdown-item" >Another action</button>
          </div>
        </div>

        <div className="btn-group">
          <button style={{ borderRadius: 0 }} type="button" className="btn btn-danger btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Authors</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" >Action</button>
            <button className="dropdown-item" >Another action</button>
          </div>
        </div>

        <div className="btn-group">
          <button style={{ borderRadius: 0 }} type="button" className="btn btn-danger btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Tags</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" >Action</button>
            <button className="dropdown-item" >Another action</button>
          </div>
        </div>

        <div className="btn-group">
          <button style={{ borderRadius: 0 }} type="button" className="btn btn-danger btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by</button>
          <div className="dropdown-menu">
            <button className="dropdown-item" >Action</button>
            <button className="dropdown-item" >Another action</button>
          </div>
        </div>

        <button type="button" class="btn btn-success btn-sm" style={{ borderRadius: 0, marginLeft: "60px" }} onClick={() => addPost()}>New Post</button>
      </div>
    </div>
  )
}