import React, {useState, useRef} from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalForm = props => {
    const [loadingStatus, setLoadingStatus] = useState(false)


    const name = useRef()
    const breed = useRef()

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    const constructNewAnimal = (nameInput, breedInput) => {
        if (nameInput === "" || breedInput === "") {
            window.alert("Please input an animal name and breed");
        } else {
            setLoadingStatus(true)
            const animal = {
                name: nameInput,
                breed: breedInput,
            };
            // Create the animal and redirect user to animal list
            AnimalManager.post(animal)
                .then(() => props.history.push("/animals"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            ref={name}
                            id="animalName"
                            placeholder="Animal name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input
                            type="text"
                            required
                            ref={breed}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={loadingStatus}
                            onClick={() => constructNewAnimal(name.current.value, breed.current.value)}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )

}

export default AnimalForm