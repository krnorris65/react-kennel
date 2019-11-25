import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login'



const ApplicationViews = props => {
    const setUser = props.setUser
    const loggedIn = props.authenticated()

    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <Home />
            }} />

            <Route path="/login" render={(props) => {
                return <Login setUser={setUser} {...props} />
            }} />

            <Route exact path="/animals" render={(props) => {
                if (loggedIn) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                if (loggedIn) {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/animals/new" render={(props) => {
                if (loggedIn) {
                    return <AnimalForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/animals/:animalId(\d+)/edit" render={(props) => {
                if (loggedIn) {
                    return <AnimalEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

        </React.Fragment>
    )

}

export default ApplicationViews