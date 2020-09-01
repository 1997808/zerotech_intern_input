import React, { useState, useEffect } from 'react'
import GhostAdminAPI from '@tryghost/admin-api'
import Header from './header'
import Table from './table'

export default function AdminApi(props) {
  const [data, setData] = useState([])

  const [status, setStatus] = useState("default")
  const [author, setAuthor] = useState("default")
  const [tag, setTag] = useState("default")
  const [time, setTime] = useState("default")

  const api = new GhostAdminAPI({
    url: 'http://145.239.255.230:2368',
    key: '5f3fe4a363f80d00015a9377:47e6710efb8b0d584869e6444fc0e38b689e2d33079995783a902603ea0dfd4f',
    version: "v3"
  });

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
  } else {
    sortApi = {
      order: time
    }
  }

  useEffect(() => {
    api.posts
      .browse({
        include: 'tags,authors',
        ...filterApi,
        ...sortApi,
        // limit: 3
      })
      .then((posts) => {
        setData(posts)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [status, author, tag, time])


  return (
    <>
      <Header setStatus={setStatus} setAuthor={setAuthor} setTag={setTag} setTime={setTime} />
      <Table data={data} />
    </>
  )
}
