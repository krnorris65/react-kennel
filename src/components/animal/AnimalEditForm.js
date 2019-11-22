import React, {useEffect, useState, useRef} from 'react'
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
        console.log(updateName.current.value)
        console.log(updateBreed.current.value)
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