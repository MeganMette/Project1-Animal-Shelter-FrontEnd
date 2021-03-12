'use strict';



const contextPath = "http://localhost:8080";
const output = document.getElementById("output");

function getShelterAnimal(){
    axios.get(contextPath + "/getAll")
    .then(res => {
        output.innerHTML = "";
        const shelterAnimal = res.data;

        shelterAnimal.forEach(shelterAnimal => {
            const newShelterAnimal = renderShelterAnimal(shelterAnimal);
            console.log("New Shelter Animal: ", newShelterAnimal);
            output.appendChild(newShelterAnimal);            
        });
    }).catch(err => console.error(err))
}

function renderShelterAnimal(shelterAnimal) {

    const newColumn = document.createElement("div");
    newColumn.className = "col";
  
    const newShelterAnimal = document.createElement("div");
    newShelterAnimal.className = "card";
    newColumn.appendChild(newShelterAnimal);
  
    const shelterAnimalBody = document.createElement("div");
    shelterAnimalBody.className = "card-body";
    newShelterAnimal.appendChild(shelterAnimalBody);
  
    const shelterAnimalName = document.createElement("h5");
    shelterAnimalName.className = "card-title";
    shelterAnimalName.innerText = shelterAnimal.name;
    shelterAnimalBody.appendChild(shelterAnimalName);
  
    const shelterAnimalText = document.createElement("p");
    shelterAnimalText.className = "card-text";
    shelterAnimalText.innerHTML = "Age: " + shelterAnimal.age;
    shelterAnimalText.innerHTML += "<br>";
    shelterAnimalText.innerHTML += "Gender: " + shelterAnimal.gender;
    shelterAnimalText.innerHTML += "<br>";
    shelterAnimalText.innerHTML += "Breed: " + shelterAnimal.breed;
    shelterAnimalText.innerHTML += "<br>";
    shelterAnimalText.innerHTML += "Size: " + shelterAnimal.size;
    shelterAnimalText.innerHTML += "<br>";
    shelterAnimalText.innerHTML += "Location: " + shelterAnimal.location;
    shelterAnimalText.innerHTML += "<br>";
    shelterAnimalText.innerHTML += "Additional Information: " + shelterAnimal.additionalInformation;
    shelterAnimalBody.appendChild(shelterAnimalText);

    const deleteShelterAnimalButton = document.createElement("a");
    deleteShelterAnimalButton.className = "card-link";
    deleteShelterAnimalButton.innerText = "Delete";
    deleteShelterAnimalButton.addEventListener('click', () => deleteShelterAnimal(shelterAnimal.animalId));
    shelterAnimalFooter.appendChild(deleteShelterAnimalButton);
  
    return newColumn;
  }

  function deleteShelterAnimal(animalId) {
    axios.delete(contextPath + "/removeShelterAnimal/" + id)
      .then(() => getPenguins())
      .catch(err => console.error(err));
  }
