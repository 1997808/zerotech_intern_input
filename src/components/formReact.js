import React, { useState } from 'react'
import FormEnter from './formEnter'
import Filter from './filter'
import DataTable from './dataTable'

export default function FormReact(props) {
  const [data, setData] = useState([["Mark", "0943473", "Male"], ["King", "0234723482", "Female"]])
  // const [formData, setFormData] = useState([])
  const [fixData, setFixData] = useState([])

  const addNewData = (newData) => {
    setData([...data, newData])
  }
  const editRowData = (index) => {
    setFixData(data[index])
  }

  const deleteRowData = (index) => {
    let remainData = [...data]
    remainData.splice(index, 1)
    setData(remainData)
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-4 offset-4">
          <FormEnter addData={addNewData} fixData={fixData} />
        </div>

        <div class="col-12">
          <Filter />
        </div>

        <div class="col-12">
          <DataTable data={data} editData={editRowData} deleteData={deleteRowData} />
        </div>
      </div>
    </div>
  )
}