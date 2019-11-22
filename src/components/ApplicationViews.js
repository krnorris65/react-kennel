import { Route } from 'react-router-dom'
import React from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login'



const ApplicationViews = () => {

    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route path="/login" render={(props) => {
            return <Login />
        }}/>

        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props}/>
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={(props) => {
            return <AnimalEditForm {...props}/>
        }}/>

      </React.Fragment>
    )

}

export default ApplicationViews