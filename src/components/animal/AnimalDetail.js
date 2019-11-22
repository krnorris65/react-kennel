import React, { useEffect, useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {

    const [currentAnimal, setCurrentAnimal] = useState({})
    const [loadingStatus, setLoadingStatus] = useState(true)

    const getCurrentAnimal = () => {
        //get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(props.animalId)
            .then((animal) => {
                setCurrentAnimal({ name: animal.name, breed: animal.breed })
                setLoadingStatus(false)
            });
    }

    const handleDelete = () => {
        setCurrentAnimal({ loadingStatus: true })
        AnimalManager.delete(props.animalId)
            .then(() => props.history.push("/animals"))
    }

    useEffect(getCurrentAnimal, [])

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require('./dog.svg')} alt="My Dog" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{currentAnimal.name}</span></h3>
                <p>Breed: {currentAnimal.breed}</p>
                <button type="button" disabled={loadingStatus} onClick={handleDelete}>Discharge</button>

            </div>
        </div>
    );
}

export default AnimalDetail;