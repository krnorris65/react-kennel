import React from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"

const Kennel = () => {

    const isAuthenticated = () => localStorage.getItem("credentials") !== null

    const setUser = (authObj) => {
        localStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
    }

    const clearUser = () => {
        localStorage.clear()
    }

    return (
      <>
        <NavBar authenticated={isAuthenticated} clearUser={clearUser}/>
        <ApplicationViews authenticated={isAuthenticated} setUser={setUser}/>
      </>
    )
}

export default Kennel