const contextPath = "http://localhost:8080";
const output = document.getElementById("output");

function getShelterAnimalByType() {
  axios.get(contextPath + "/getShelterAnimal")
    .then(res => {
      output.innerHTML = "";

      const shelterAnimals = res.data;

      ShelterAnimals.forEach(ShelterAnimal => {
        const newShelterAnimal = renderShelterAnimal(shelterAnimal);
        output.appendChild(newShelterAnimal);
      });
    }).catch(err => console.error(err))
}

function renderShelterAnimalByType(shelterAnimal) {

  const newColumn = document.createElement("div");
  newColumn.className = "col";

  const newShelterAnimal = document.createElement("div");
  newShelterAnimal.className = "card";
  newColumn.appendChild(newShelterAnimal);

  const ShelterAnimalBody = document.createElement("div");
  ShelterAnimalBody.className = "card-body";
  newShelterAnimal.appendChild(ShelterAnimalBody);

  const ShelterAnimalName = document.createElement("h5");
  ShelterAnimalName.className = "card-title";
  ShelterAnimalName.innerText = ShelterAnimal.name;
  ShelterAnimalBody.appendChild(ShelterAnimalName);

  const ShelterAnimalText = document.createElement("p");
  ShelterAnimalText.className = "card-text";
  ShelterAnimalText.innerHTML = "Name: " + ShelterAnimal.name;
  ShelterAnimalText.innerHTML = "Age: " + ShelterAnimal.age;
  ShelterAnimalText.innerHTML = "Gender: " + ShelterAnimal.gender;
  ShelterAnimalText.innerHTML += "<br>";
  ShelterAnimalText.innerHTML += "Breed: " + ShelterAnimal.breed;
  ShelterAnimalText.innerHTML = "Size: " + ShelterAnimal.size;
  ShelterAnimalText.innerHTML = "Location: " + ShelterAnimal.location;
  ShelterAnimalText.innerHTML = "Additional Information: " + ShelterAnimal.additionalInformation;
  ShelterAnimalBody.appendChild(ShelterAnimalText);

  const ShelterAnimalFooter = document.createElement("div");
  ShelterAnimalFooter.className = "card-footer"
  newShelterAnimal.appendChild(ShelterAnimalFooter);

  const deleteShelterAnimalButton = document.createElement("a");
  deleteShelterAnimalButton.className = "card-link";
  deleteShelterAnimalButton.innerText = "Delete";
  deleteShelterAnimalButton.addEventListener('click', () => deleteShelterAnimal(shelterAnimal.animalId));
  ShelterAnimalFooter.appendChild(deleteShelterAnimalButton);

  return newColumn;
}

function deleteShelterAnimalById(animalId) {
  axios.delete(contextPath + "/removeShelterAnimal/" + animalId)
    .then(() => getShelterAnimals())
    .catch(err => console.error(err));
}

document.getElementById("shelterAnimalForm").addEventListener('submit', function (event) {
  event.preventDefault();

  console.log("this: ", this);
  console.log("this.animalType: ", this.animalType);
  console.log("this.name: ", this.name);
  console.log("this.age: ", this.age);
  console.log("this.gender: ", this.gender);
  console.log("this.breed: ", this.breed);
  console.log("this.size: ", this.size);
  console.log("this.location: ", this.location);
  console.log("this.additionalInformation: ", this.additionalInformation);

  const data = {
    animalType: this.animalType.value,
    name: this.name.value,
    age: this.age.value,
    gender: this.gender.value,
    breed: this.breed.value,
    size: this.size.value,
    location: this.location.value,
    additionalInformation: this.additionalInformation.value
  };

  axios.post(contextPath + "/createShelterAnimal", data, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(() => {
    this.reset();
    this.name.focus();
    getShelterAnimals();
  })
    .catch(err => console.error(err));

});

getShelterAnimals();