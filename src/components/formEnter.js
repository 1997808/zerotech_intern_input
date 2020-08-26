import React, { useState } from 'react'

export default function FormEnter(props) {
  const { addData, fixData } = props
  const [userName, setUserName] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState(null)

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
    <div class="formContainer" style={{ margin: "30px 0" }}>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" id="InputName" onChange={(event) => nameChange(event)} value={userName} placeholder="Enter Name" />
        </div>
        <div class="form-group">
          <input type="number" class="form-control" id="InputPhone" onChange={(event) => phoneChange(event)} value={phone}
            placeholder="Enter Phone" />
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
            onChange={(event) => genderChange(event)} value={"Male"} />
          <label class="form-check-label" for="exampleRadios1">Male</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
            onChange={(event) => genderChange(event)} value={"Female"} />
          <label class="form-check-label" for="exampleRadios2">Female</label>
        </div>
        <br></br>
        <button type="button" class="btn btn-primary" id="addBtn" onClick={(event) => addNewData(event)}>Add</button>
        <button type="button" class="btn btn-primary" id="editBtn" onclick={() => { }} hidden>Apply</button>
      </form>
    </div >
  )
}
