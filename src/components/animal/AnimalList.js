import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'


class AnimalList extends Component {

    state = {
        animals: []
    }

    componentDidMount() {
        console.log("ANIMAL LIST: ComponentDidMount")
        AnimalManager.getAll()
            .then(animals => {
                this.setState({
                    animals: animals
                })
            })
    }

    render() {
        console.log("ANIMAL LIST: Render");

        return (
            <div className="container-cards">
                {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
            </div>
        )
    }
}

export default AnimalList