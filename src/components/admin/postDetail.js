import React, { useEffect, useState } from 'react'
import {
  useParams,
  useHistory
} from "react-router-dom";
import api from "./config/apiConfig"

export default function PostDetail(props) {
  const [update, setUpdate] = useState(false)
  const { id } = useParams();
  let history = useHistory();

  let model = {
    title: "",
    status: "draft",
    excerpt: "",
  }

  const onChange = (field, value) => {
    model[field] = value
    console.log(model)
  }

  useEffect(() => {
    if (id !== "add") {
      api.posts
        .read({ id: id })
        .then(res => res)
        .then((post) => {
          const { title, status, custom_excerpt } = post
          model = { title: title, status: status, excerpt: custom_excerpt }
          setUpdate(!update)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [])

  const sendPostData = (e) => {
    e.preventDefault()
    let updated = new Date().toISOString()
    console.log(model)
    api.posts
      .edit({
        id: id,
        title: model.title,
        status: model.status,
        custom_excerpt: model.excerpt,
        updated_at: updated
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .then(() => history.push("/"))
  }

  const addPost = (e) => {
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

  let { title, status, excerpt } = model
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
            <option>published</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Custom excerpt</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={event => onChange("excerpt", event.target.value)} defaultValue={excerpt}></textarea>
        </div>
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
