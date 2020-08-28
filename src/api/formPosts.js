import React, { useState, useEffect } from 'react'
import Table from './table'
import Filter from './filter'

export default function FormReact(props) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [selectedValue, setSelectedValue] = useState("")
  const [orderStatus, setOrderStatus] = useState(false)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch(`http://145.239.255.230:2368/ghost/api/v3/content/posts/?key=c5af5cf4e8a3f121d54fa4e8bf${filter !== "" ? "&filter=title:'" + filter + "'" : ""}${orderStatus && selectedValue !== "default" ? "&order=" + selectedValue : ""}&page=${page}&limit=3`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.posts !== undefined) {
            setData(result.posts)
          } else setData([])
        },
        (error) => {
          console.log(error)
        }
      )
  }, [page, orderStatus, selectedValue, filter])

  // const takeFilterData = (filter) => {
  //   let Fil = []
  //   Fil = data.filter(item => { return Object.values(item).includes(filter) })
  //   setFilterData(Fil)
  // }

  return (
    <>
      <Filter setSelectedValue={setSelectedValue} setOrderStatus={setOrderStatus} setFilter={setFilter} />
      <Table data={data} setPage={setPage} />
    </>
  )
}