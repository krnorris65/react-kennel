import React, {useEffect, useState, useRef} from 'react'
import AnimalManager from '../../modules/AnimalManager'

const AnimalEditForm = props => {
    const [updateAnimal, setUpdateAnimal] = useState({loadingStatus: true})

    const getUpdateAnimal = () => {
        AnimalManager.get(props.match.params.animalId)
        .then(animal => {
            setUpdateAnimal({
                animalName: animal.name, 
                breed: animal.breed, 
                loadingStatus: false
            })
        })
    }
    useEffect(getUpdateAnimal, [])

    const updateName = useRef()
    const updateBreed = useRef()

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
                            value={updateAnimal.animalName}
                        />
                        <label htmlFor="animalName">Animal name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            id="breed"
                            ref={updateBreed}
                            value={updateAnimal.breed}
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={updateAnimal.loadingStatus}
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