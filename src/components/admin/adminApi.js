import React, { useState, useEffect } from 'react'
import GhostAdminAPI from '@tryghost/admin-api'
import Header from './header'
import Table from './table'

export default function AdminApi(props) {
  const [data, setData] = useState([])
  const api = new GhostAdminAPI({
    url: 'http://145.239.255.230:2368',
    key: '5f3fe4a363f80d00015a9377:47e6710efb8b0d584869e6444fc0e38b689e2d33079995783a902603ea0dfd4f',
    version: "v3"
  });

  useEffect(() => {
    api.posts
      .browse({ include: 'tags,authors' })
      .then((posts) => {
        console.log(posts)
        setData(posts)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])


  return (
    <>
      <div className="container">
        <Header />
        <Table data={data} />
      </div>
    </>
  )
}
