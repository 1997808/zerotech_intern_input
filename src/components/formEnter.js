import React, { useState, useEffect } from 'react'

export default function FormEnter(props) {
  const { addData, editData, addStatus, setAddStatus } = props
  const [userName, setUserName] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")

  useEffect(() => {
    setUserName(editData[0])
    setPhone(editData[1])
    setGender(editData[2])
  }, [editData])

  let newData = [userName, phone, gender]

  const nameChange = (e) => {
    setUserName(e.target.value)
  }
  const phoneChange = (e) => {
    setPhone(e.target.value)
  }
  const genderChange = (e) => {
    setGender(e.target.value)
  }

  function formValidation() {
    // let regexName = /[^a-zA-Z]/g
    // if (regexName.test(userName)) {
    //   alert("Only Word allow");
    //   return false;
    // }
    // let regexPhone = /0+([0-9]{9})/
    // if (regexPhone.test(phone) === false) {
    //   alert("Must be real phone number");
    //   return false;
    // }
    return true
  }

  const addNewData = (e) => {
    e.preventDefault()
    if (formValidation()) {
      addData(newData)
    }
  }

  return (
    <div className="formContainer" style={{ margin: "30px 0" }}>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="InputName" onChange={(event) => nameChange(event)} defaultValue={userName} placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" id="InputPhone" onChange={(event) => phoneChange(event)} defaultValue={phone} placeholder="Enter Phone" />
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
            onChange={(event) => genderChange(event)} value={"Male"}
            checked={gender === "Male" ? true : false}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
            onChange={(event) => genderChange(event)} value={"Female"}
            checked={gender === "Female" ? true : false}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
        </div>
        <br></br>
        {addStatus
          ? <button type="button" className="btn btn-primary" id="addBtn" onClick={(event) => addNewData(event)}>Add</button>
          : <button type="button" className="btn btn-primary" id="editBtn" onClick={() => { setAddStatus(true) }}>Apply</button>
        }
      </form>
    </div >
  )
}
