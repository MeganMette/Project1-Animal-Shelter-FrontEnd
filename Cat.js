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

const personForm = document.getElementByType('personForm');

personForm.addEventListener('submit', function (event) {
    event.preventDefault(); // stops form submitting and refreshing the page

    const name = this.name.value;
    const age = this.age.value;

    const row = document.createElement('tr');

    const nameField = document.createElement('td');
    nameField.innerText = name;

    row.appendChild(nameField);

    const ageField = document.createElement('td');
    ageField.innerText = age;

    row.appendChild(ageField);

    tableBody.appendChild(row);

    this.reset();
    this.name.focus();
})