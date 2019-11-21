import React, { useEffect, useState } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'


const AnimalList = props => {

    const [animals, setAnimals] = useState([])


    const getAnimals = () => {
        AnimalManager.getAll()
            .then(allAnimals => {
                setAnimals(allAnimals)
            })
    }

    useEffect(getAnimals, [])

    const deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then(newAnimals => {
                        setAnimals(newAnimals)
                    })
            })
    }


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
                {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />)}
            </div>
        </React.Fragment>
    )

}

export default AnimalList