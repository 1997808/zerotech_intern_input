import React, { useState } from 'react'
import FormEnter from './formEnter'
import Filter from './filter'
import DataTable from './dataTable'

export default function FormReact(props) {
  const [data, setData] = useState([["Mark", "0943473", "Male"], ["King", "0234723482", "Female"], ["Mark", "0943473", "Male"], ["King", "0234723482", "Female"]])
  const [fixData, setFixData] = useState([])
  const [selectedRow, setSelectedRow] = useState(null)
  const [addStatus, setAddStatus] = useState(true)
  const [filterData, setFilterData] = useState([])

  const addNewData = (newData) => {
    setData([...data, newData])
  }

  const editRowData = (index) => {
    setAddStatus(false)
    setFixData(data[index])
    setSelectedRow(index)
  }

  const applyEditData = (e, newData) => {
    e.preventDefault()
    let editData = [...data]
    editData.splice(selectedRow, 1, newData)
    setData(editData)
  }

  const deleteRowData = (index) => {
    let remainData = [...data]
    remainData.splice(index, 1)
    setData(remainData)
  }

  const takeFilterData = (filter) => {
    let newFilterData = []
    newFilterData = data.filter(item => item.includes(filter))
    setFilterData(newFilterData)
  }

  const deleteAllRow = (arr) => {
    let remainData = [...data]
    for (let i of arr) {
      remainData.splice(i, 1)
    }
    setData(remainData)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <FormEnter addData={addNewData} editData={fixData} addStatus={addStatus} setAddStatus={setAddStatus} applyEditData={applyEditData} />
        </div>

        <div className="col-12">
          <Filter filterData={filterData} takeFilterData={takeFilterData} />
        </div>

        <div className="col-12">
          <DataTable data={data} editData={editRowData} deleteData={deleteRowData} deleteAllRow={deleteAllRow} />
        </div>
      </div>
    </div>
  )
}