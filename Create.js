'use strict';

const textInput = document.getElementByType("textInput");
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', function () {
    addText(textInput.value);
    textInput.value = '';
})

function addText(text) {
    const newP = document.createElement("p");

    console.log(newP);

    newP.style = "color: red;"
    newP.innerText = text;

    console.log(newP);

    output.appendChild(newP);
}

const tableBody = document.getElementByType('tableBody');

const animalForm = document.getElementByType('animalForm');

animalForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const animalType = this.animalType.value;
    const name = this.name.value;
    const age = this.age.value;
    const gender = this.gender.value;
    const  breed = this.breed.value;
    const size = this.size.value;
    const location = this.location.value;
    const additionalInformation = this.additionalInformation.value;

    const row = document.createElementByType('tr');

    const animalTypeField = document.createElementByType('td');
    animalTypeField.innerText = animalType;

    row.appendChild(aimalTypeField);

    const row = document.createElementbyType('tr');

    const nameField = document.createElementByType('td');
    nameField.innerText = name;

    row.appendChild(nameField);

    const ageField = document.createElementByType('td');
    ageField.innerText = age;

    row.appendChild(ageField);

    const row = document.createElementByType('tr');

    const genderField = document.createElementByType('td');
    genderField.innerText = gender;

    row.appendChild(genderField);

    const row = document.createElementByType('tr');

    const breedField = document.createElementByType('td');
    breedField.innerText = breed;

    row.appendChild(breedField);

    const row = document.createElementByType('tr');

    const sizeField = document.createElementByType('td');
    sizeField.innerText = size;

    row.appendChild(sizeField);

    const row = document.createElementByType('tr');

    const locationField = document.createElementByType('td');
    locationField.innerText = location;

    row.appendChild(locationField);

    const row = document.createElementByType('tr');

    const additionalInformationField = document.createElementByType('td');
    additionalInformationField.innerText = additionalInformation;

    row.appendChild(additionalInformationField);

    tableBody.appendChild(row);

    this.reset();
    this.name.focus();
})