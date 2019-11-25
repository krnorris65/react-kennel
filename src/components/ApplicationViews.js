import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'

import EmployeeList from './employee/EmployeeList'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import Login from './auth/Login'


class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if (this.props.user) {
                        return <Home />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.props.user) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.props.user) {
                        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.props.user) {
                        return <AnimalForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        if (this.props.user) {
                            return <AnimalEditForm {...props} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />
                <Route exact path="/employees" render={(props) => {
                    if (this.props.user) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }} />
                <Route path="/login" render={props => {
                    return <Login setUser={this.props.setUser} {...props}/>
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews