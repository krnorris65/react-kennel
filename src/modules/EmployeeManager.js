const remoteURL = "http://localhost:5002";

export default {
  getAll() {
        return fetch(`${remoteURL}/employees/`).then(result => result.json())
    },
   getWithAnimals(id) {
        return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
                .then(result => result.json())
    }
}