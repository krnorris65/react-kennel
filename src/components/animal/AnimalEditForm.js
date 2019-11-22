import React, { useEffect, useState, useRef } from 'react'
import AnimalManager from '../../modules/AnimalManager'

const AnimalEditForm = props => {
    const [loadingStatus, setLoadingStatus] = useState(true)
    const updateName = useRef()
    const updateBreed = useRef()

    const getUpdateAnimal = () => {
        AnimalManager.get(props.match.params.animalId)
            .then(animal => {
                setLoadingStatus(false)
                updateName.current.value = animal.name
                updateBreed.current.value = animal.breed
            })
    }
    useEffect(getUpdateAnimal, [])



    const editAnimal = () => {
        if (updateName.current.value === "" || updateBreed.current.value === "") {
            window.alert("Please input an animal name and breed");
        } else {
            setLoadingStatus(true)
            const editedAnimal = {
                id: props.match.params.animalId,
                name: updateName.current.value,
                breed: updateBreed.current.value
            }

            AnimalManager.update(editedAnimal)
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="animalName"
                            ref={updateName}
                        />
                        <label htmlFor="animalName">Animal name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            id="breed"
                            ref={updateBreed}
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={loadingStatus}
                            onClick={editAnimal}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default AnimalEditForm