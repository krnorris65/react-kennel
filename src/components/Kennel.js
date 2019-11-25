import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"

class Kennel extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null



    setUser = (authObj) => {
        /*
          For now, just store the email and password that
          the customer enters into local storage.
        */
        localStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )

    }

    clearUser = () => {
        localStorage.clear()

    }

    render() {
        return (
            <>
                <NavBar userLoggedIn={this.isAuthenticated} clearUser={this.clearUser}/>
                <ApplicationViews userLoggedIn={this.isAuthenticated}
                    setUser={this.setUser} />
            </>
        )
    }
}

export default Kennel