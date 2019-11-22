import React, { useEffect, useState } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'


const AnimalList = props => {

    const [animals, setAnimals] = useState([])


    const getAnimals = () => {
        AnimalManager.getAll()
        .then(allAnimals => {
            console.log("fetch animals")
            setAnimals(allAnimals)
            })
    }

    //empty array means that it's not watching for anything to change, will run only when the component mounts
    useEffect(getAnimals, [])

    //will run when the state of animals changes
    useEffect(
        () => {
            console.log("animals changed", animals)
        }, [animals]
    )

    //will run on every state change
    useEffect(
        () => {
            console.log("something changed")
        }
    )

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
                    onClick={() => { props.history.push("/animals/new") }}>
                    Admit Animal
                    </button>
            </section>
            <div className="container-cards">
                {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimal} {...props} />)}
            </div>
        </React.Fragment>
    )

}

export default AnimalList