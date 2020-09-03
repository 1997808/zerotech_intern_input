import React, { useState, useEffect } from 'react'
import Header from './header'
import Table from './table'
import api from './config/apiConfig'

export default function AdminApi(props) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState()

  const [status, setStatus] = useState("default")
  const [author, setAuthor] = useState("default")
  const [tag, setTag] = useState("default")
  const [time, setTime] = useState("default")

  if (status === "default" && author === "default" && tag === "default") {
    var filterApi = {}
  } else {
    filterApi = {
      filter: `${status === "default" ? "" : "status:" + status}
      ${status !== "default" && author !== "default" ? '+' : ""}
      ${author === "default" ? "" : "authors:" + author}
      ${author !== "default" && tag !== "default" ? '+' : ""}
      ${status !== "default" && author === "default" && tag !== "default" ? '+' : ""}
      ${tag === "default" ? "" : "tags:" + tag}`,
    }
  }

  if (time === "default") {
    var sortApi = {}
  } else { sortApi = { order: time } }

  useEffect(() => {
    api.posts
      .browse({
        include: 'tags,authors',
        fields: 'id, title, status, custom_excerpt, created_at, updated_at',
        ...filterApi,
        ...sortApi,
        limit: 5,
        page: page
      })
      .then((posts) => {
        setData(posts)
        setPagination(posts.meta['pagination'].pages)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [status, author, tag, time, page])

  return (
    <>
      <Header setStatus={setStatus} setAuthor={setAuthor} setTag={setTag} setTime={setTime} />
      <Table data={data} setPage={setPage} pagination={pagination} />
    </>
  )
}
