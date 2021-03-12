"use strict"

function renderShelterAnimal(shelterAnimal) {

    const shelterAnimalFooter = document.createElement("div");
    shelterAnimalFooter.className = "card-footer"
    newShelterAnimal.appendChild(shelterAnimalFooter);

    const deleteShelterAnimalButton = document.createElement("a");
    deleteShelterAnimalButton.className = "card-link";
    deleteShelterAnimalButton.innerText = "Delete";
    deleteShelterAnimalButton.addEventListener('click', () => deleteShelterAnimal(shelterAnimal.animalId));
    shelterAnimalFooter.appendChild(deleteShelterAnimalButton);

    return newColumn;

}

function deleteShelterAnimal(animalId) {
    axios.delete(contextPath + "/removeShelterAnimal/" + animalId)
      .then(() => getShelterAnimal())
      .catch(err => console.error(err));
  }