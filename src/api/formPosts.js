import React, { useState, useEffect } from 'react'
import Table from './table'
import Filter from './filter'

export default function FormReact(props) {
  const [data, setData] = useState([])

  const KEY = "?key=c5af5cf4e8a3f121d54fa4e8bf"

  useEffect(() => {
    fetch("http://145.239.255.230:2368/ghost/api/v3/content/posts/" + KEY)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.posts)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  // const takeFilterData = (filter) => {
  //   let Fil = []
  //   Fil = data.filter(item => { return Object.values(item).includes(filter) })
  //   setFilterData(Fil)
  // }

  return (
    <>
      <Filter />
      <Table data={data} />
    </>
  )
}