import React, { useEffect, useState } from 'react'
import {
  useParams
} from "react-router-dom";
import GhostAdminAPI from '@tryghost/admin-api'

export default function PostDetail(props) {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("draft")
  const [excerpt, setExcerpt] = useState(" ")
  const { id } = useParams();
  // let data = { title, status, excerpt }

  const api = new GhostAdminAPI({
    url: 'http://145.239.255.230:2368',
    key: '5f3fe4a363f80d00015a9377:47e6710efb8b0d584869e6444fc0e38b689e2d33079995783a902603ea0dfd4f',
    version: "v3"
  });

  useEffect(() => {
    api.posts
      .read({ id: id })
      .then(res => res)
      .then((post) => {
        setTitle(post.title)
        setStatus(post.status)
        setExcerpt(post.custom_excerpt)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  const sendPostData = (e) => {
    e.preventDefault()
    var today = new Date().toISOString()
    api.posts
      .edit({
        id: id,
        title: title,
        status: status,
        // excerpt: excerpt,
        updated_at: today
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <form>
        <div class="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={event => setTitle(event.target.value)} value={title} />
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlSelect1">Status</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={event => setStatus(event.target.value)} value={status}>
            <option>draft</option>
            <option>hidden</option>
            <option>published</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Custom excerpt</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={event => setExcerpt(event.target.value)} value={excerpt}></textarea>
        </div>
        {/* <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Updated at</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div> */}
        <button type="button" className="btn btn-primary col-1" onClick={(event) => sendPostData(event)}>Edit</button>
      </form>
    </div>
  )
}
