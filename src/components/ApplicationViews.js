import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login'


class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Home />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        if (this.isAuthenticated()) {
                            return <AnimalEditForm {...props} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews