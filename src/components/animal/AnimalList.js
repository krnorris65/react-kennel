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

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    render() {
        console.log("ANIMAL LIST: Render");

        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/animals/new") }}>
                        Admit Animal
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={this.deleteAnimal} />)}
                </div>
            </React.Fragment>
        )
    }
}

export default AnimalList