document.getElementById("editBtn").style.visibility = "hidden"

// let userName = ""
// let phone = ""
// let gender = ""
let filter = ""
let seletedRow = null
let checkedRow = []

let data = [["Mark", "0943473866", "Male"], ["King", "0234723482", "Female"]]

// const render = (table) => {
//   let MyTable = document.getElementById("FilterTableBody");
//   MyTable.innerHTML = ""

//   for (let rowData of table) {
//     console.log(rowData)
//     let NewRow = MyTable.insertRow();
//     let Newcell0 = NewRow.insertCell(0);
//     let Newcell1 = NewRow.insertCell(1);
//     let Newcell2 = NewRow.insertCell(2);
//     let Newcell3 = NewRow.insertCell(3);
//     let Newcell4 = NewRow.insertCell(4);
//     Newcell0.innerHTML = rowData[0];
//     Newcell1.innerHTML = rowData[1];
//     Newcell2.innerHTML = rowData[2];
//     Newcell3.innerHTML = '<button type="button" class="btn btn-success" id="editBtnFunc" onclick="editRow(this)"><i class="fas fa-edit"></i></button> <button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="far fa-trash-alt"></i></button>'
//     Newcell4.innerHTML = '<input type="checkbox" aria-label="Checkbox for following text input" class="checkbox" onchange="checkRow(this)">'
//   }
// }

// function nameChange() {
//   userName = document.getElementById("InputName").value
// }
// function phoneChange() {
//   phone = document.getElementById("InputPhone").value
// }
function filterChange() {
  filter = document.getElementById("InputFilter").value
}
// function genderChange() {
//   if (document.getElementById("exampleRadios1").checked) {
//     gender = "Male"
//   } else gender = "Female"
// }

function checkAllRow() {
  let arr = []
  for (let i = 1; i < document.getElementById("PhoneBook").rows.length; i++) {
    document.getElementsByClassName("checkbox")[i - 1].checked = true
    arr.push(i - 1)
  }
  checkedRow = arr
  console.log(checkedRow)
}

function deleteAllRow() {
  let count = 0
  for (let i in checkedRow) {
    document.getElementById("PhoneBook").deleteRow(checkedRow[i] + 1 - count);
    count++
  }
  checkedRow = []
}

function checkRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  if (document.getElementsByClassName("checkbox")[i - 1].checked) {
    checkedRow.push(i - 1)
  } else {
    let arr = checkedRow.filter(j => j != i - 1)
    checkedRow = arr
  }
  console.log(checkedRow)
}

// function formValidation() {
//   let regexName = /[^a-zA-Z]/g
//   if (regexName.test(userName)) {
//     alert("Only Word allow");
//     return false;
//   }

//   let regexPhone = /0+([0-9]{9})/
//   if (regexPhone.test(phone) === false) {
//     alert("Must be real phone number");
//     return false;
//   }
//   return true
// }

document.getElementById("addBtn").addEventListener("click", function (event) {
  event.preventDefault()
  if (formValidation()) {
    data.push([userName, phone, gender])

    let MyTable = document.getElementById("PhoneBook");
    //insert new row. 
    let NewRow = MyTable.insertRow();
    let Newcell0 = NewRow.insertCell(0);
    let Newcell1 = NewRow.insertCell(1);
    let Newcell2 = NewRow.insertCell(2);
    let Newcell3 = NewRow.insertCell(3);
    let Newcell4 = NewRow.insertCell(4);
    Newcell0.innerHTML = userName;
    Newcell1.innerHTML = phone;
    Newcell2.innerHTML = gender;
    Newcell3.innerHTML = '<button type="button" class="btn btn-success" id="editBtnFunc" onclick="editRow(this)"><i class="fas fa-edit"></i></button> <button type="button" class="btn btn-danger" onclick="deleteRow(this)"><i class="far fa-trash-alt"></i></button>'
    Newcell4.innerHTML = '<input type="checkbox" aria-label="Checkbox for following text input" class="checkbox" onchange="checkRow(this)">'
  }
});

function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("PhoneBook").deleteRow(i);
}

function editRow(r) {
  let j = r.parentNode.parentNode.rowIndex;
  seletedRow = r.parentNode.parentNode;
  document.getElementById('addBtn').style.visibility = 'hidden'
  document.getElementById("editBtn").style.visibility = "visible"

  userName = seletedRow.cells[0].innerText
  phone = seletedRow.cells[1].innerText
  gender = seletedRow.cells[2].innerText

  document.getElementById("InputName").value = userName
  document.getElementById("InputPhone").value = phone
  gender === "Male" ? document.getElementById("exampleRadios1").checked = true : document.getElementById("exampleRadios2").checked = true
}

document.getElementById("editBtn").addEventListener("click", function (event) {
  event.preventDefault()
  document.getElementById('addBtn').style.visibility = 'visible'
  document.getElementById("editBtn").style.visibility = "hidden"

  seletedRow.cells[0].innerText = userName
  seletedRow.cells[1].innerText = phone
  seletedRow.cells[2].innerText = gender
})

document.getElementById("filterBtn").addEventListener("click", function (event) {
  let filterRow = []
  let filterData = []
  event.preventDefault()
  for (let i in data) {
    for (let j in data[i]) {
      if (filter === data[i][j]) {
        filterRow.push(i)
      }
    }
  }

  for (let n in data) {
    if (filterRow.includes(n)) {
      filterData.push(data[n])
    } else continue
  }
  render(filterData)
})