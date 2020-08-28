import React, { useState } from 'react'
require("./signin.css")

export default function Auth(props) {
  const [authData, setAuthData] = useState({
    "username": "diennk@zerobank.cash",
    "password": "UBZSYL3PvJ9Gxpg"
  })

  const signIn = (e) => {
    e.preventDefault()
    fetch("http://145.239.255.230:2368/ghost/api/v3/admin/session", {
      method: "POST",
      // credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Origin": "http://localhost:3000",
      },
      body: JSON.stringify(authData),
    })
      .then(res => res.headers['set-cookies'])
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error, "error")
        }
      )
  }

  return (
    <div className="text-center">
      <form className="form-signin">
        <img className="mb-4" src={"/docs/4.5/assets/brand/bootstrap-solid.svg"} alt="" width={72} height={72} />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={(event) => signIn(event)}>Sign in</button>
      </form>
    </div>
  )
}
