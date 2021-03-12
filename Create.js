"use strict"

const contextPath = "http://localhost:8080";
const output = document.getElementById("output");

function getShelterAnimal() {
  axios.get(contextPath + "/getShelterAnimal")
    .then(res => {
      output.innerHTML = "";

      const shelterAnimal = res.data;

      shelterAnimal.forEach(shelterAnimal => {
        const newShelterAnimal = renderShelterAnimal(shelterAnimal);
        // console.log("New shelterAnimal: ", newshelterAnimal);
        output.appendChild(newShelterAnimal);
      });
    }).catch(err => console.error(err));
}

{/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

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
  deleteShelterAnimalButton.addEventListener('click', () => deleteShelterAnimal(sheterAnimal.animalId));
  shelterAnimalBody.appendChild(deleteShelterAnimalButton);

  const updateShelterAnimalButton = document.createElement("a");
  updateShelterAnimalButton.className = "card btn";
  updateShelterAnimalButton.innerText = "Update";
  updateShelterAnimalButton.addEventListener('click', () => updateShelterAnimal(ShelterAnimal.animalId));
  shelterAnimalBody.appendChild(updateShelterAnimalButton);

  return newColumn;

}

function deleteShelterAnimal(animalId) {
  axios.delete(contextPath + "/removeAnimalShleter/" + animalId)
    .then(() => getShelterAnimal())
    .catch(err => console.error(err));
}


document.getElementById("animalForm").addEventListener('submit', function (event) {
  event.preventDefault();

  console.log("this: ", this);
  console.log("this.name:", this.name);
  console.log("this.age:", this.age);
  console.log("this.gender:", this.gender);
  console.log("this.breed:", this.breed);
  console.log("this.size: ", this.size);
  console.log("this.location: ", this.location);
  console.log("this.additionalInformation: ", this.additionalInformation);

  const data = {
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
  })
  .then(() => {
    this.reset();
    this.name.focus();
    getShelterAnimal();
  })
    .catch(err => console.error(err));

});

getShelterAnimal();