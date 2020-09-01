import React, { useEffect, useState } from 'react'
import {
  useParams,
  useHistory
} from "react-router-dom";
import GhostAdminAPI from '@tryghost/admin-api'

let model = {
  title: "",
  status: "",
  excerpt: "",
}

export default function PostDetail(props) {
  const [update, setUpdate] = useState(false)
  // const [title, setTitle] = useState("")
  // const [status, setStatus] = useState("draft")
  // const [excerpt, setExcerpt] = useState("insert text here")
  const { id } = useParams();
  let history = useHistory();
  // let data = { title, status, excerpt }

  const onChange = (field, value) => {
    model[field] = value
  }

  const api = new GhostAdminAPI({
    url: 'http://145.239.255.230:2368',
    key: '5f3fe4a363f80d00015a9377:47e6710efb8b0d584869e6444fc0e38b689e2d33079995783a902603ea0dfd4f',
    version: "v3"
  });

  useEffect(() => {
    if (id === "add")
      api.posts
        .read({ id: id })
        .then(res => res)
        .then((post) => {
          // setTitle(post.title)
          // setStatus(post.status)
          // setExcerpt(post.custom_excerpt)
          const { title, status, custom_excerpt } = post
          model = { title, status, excerpt: custom_excerpt }
          setUpdate(!update)
        })
        .catch((err) => {
          console.error(err);
        });
  }, [])

  const sendPostData = (e) => {
    e.preventDefault()
    api.posts
      .edit({
        id: id,
        title: title,
        status: status,
        excerpt: excerpt,
        updated_at: new Date().toISOString()
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .then(() => history.push("/"))
  }

  const addPost = (e) => {
    console.log(model)
    e.preventDefault()
    api.posts
      .add(model)
      .then(() => history.push("/"))
  }

  const deletePost = (e) => {
    e.preventDefault()
    api.posts
      .delete({
        id: id
      })
      .then(() => history.push("/"))
  }
  console.log('render')

  const { title, status, excerpt } = model
  return (
    <div>
      <form>
        <div class="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={event => onChange("title", event.target.value)} defaultValue={title} />
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlSelect1">Status</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={event => onChange("status", event.target.value)} defaultValue={status}>
            <option>draft</option>
            <option>hidden</option>
            <option>published</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Custom excerpt</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={event => onChange("excerpt", event.target.value)} defaultValue={excerpt}></textarea>
        </div>
        {/* <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Updated at</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div> */}
        {
          id === "add"
            ? <button type="button" className="btn btn-primary col-2 offset-5" onClick={(event) => addPost(event)}>Add Post</button>
            : <>
              <button type="button" className="btn btn-primary col-2 offset-4" onClick={(event) => sendPostData(event)}>Edit</button>
              <button type="button" className="btn btn-primary col-2 offset-1" onClick={(event) => deletePost(event)}>Delete</button>
            </>
        }
      </form>
    </div>
  )
}
