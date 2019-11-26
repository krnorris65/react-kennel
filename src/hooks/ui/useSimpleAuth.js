import {useState} from 'react'


const useSimpleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const isAuthenticated = () => {
        return loggedIn || localStorage.getItem("credentials") !== null

    }

    const register = userInfo => {
        //post user to database
        //set localStorage
        //change loggedIn to true
    }

    const login = creds => {
        console.log("login")
        localStorage.setItem("credentials", JSON.stringify(creds))
        setLoggedIn(true)
    }

    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem("credentials")
    }

    return {isAuthenticated, logout, login, register}
}

export default useSimpleAuth