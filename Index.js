'use strict'

let animalId;
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const output = document.getElementById('output');

function getShelterAnimal() {
    axios.get('http://localhost:8080/getShelterAnimal')
        .then(res => {
            output.innerHTML = "";
            const shelterAnimal = res.data;

            shelterAnimal.forEach(shelterAnimal => {
                const newShelterAnimal = renderShelterAnimal(shelterAnimal);
                console.log("New Shelter Animal: " + newShelterAnimal);
                output.prepend(newShelterAnimal);
            });
        }).catch(err => console.error(err))
}

function renderShelterAnimal(shelterAnimal) {
    const newShelterAnimal = document.createElement("div");
    newShelterAnimal.className = "card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerHTML = shelterAnimal.name;
    newShelterAnimal.appendChild(cardHeader);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    newShelterAnimal.appendChild(cardBody);

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = "Animal: " + shelterAnimal.name + "(" + shelterAnimal.age + ", " + shelterAnimal.gender + ", " + shelterAnimal.breed + ", " + shelterAnimal.size + ", " + shelterAnimal.location + ", " + shelterAnimal.additionalInformation + ")";
    cardBody.appendChild(cardText);

    const editButton = document.createElement("button")
    editButton.className = "btn btn-primary";
    editButton.innerText = "Edit";
    editButton.addEventListener('click', function () {
        animalId = shelterAnimal.animalId;
        modalBg.classList.add('bg-active');
        if (shelterAnimal.animalType != '') {
            document.getElementById('modal-shelterAnimal-animalType').value = shelterAnimal.animalType
        };
        if (shelterAnimal.name != '') {
            document.getElementById('modal-shelterAnimal-name').value = shelterAnimal.name
        };
        if (shelterAnimal.age != '') {
            document.getElementById('modal-shelterAnimal-age').value = shelterAnimal.age
        };
        if (shelterAnimal.gender != '') {
            document.getElementById('modal-shelterAnimal-gender').value = shelterAnimal.gender
        };
        if (shelterAnimal.breed != '') {
            document.getElementById('modal-shelterAnimal-breed').value = shelterAnimal.breed
        };
        if (shelterAnimal.size != '') {
            document.getElementById('modal-shelterAnimal-size').value = shelterAnimal.size
        };
        if (shelterAnimal.location != '') {
            document.getElementById('modal-shelterAnimal-location').value = shelterAnimal.location
        };
        if (shelterAnimal.additionalInformation != '') {
            document.getElementById('modal-shelterAnimal-additionalInformation').value = shelterAnimal.additionalInformation
        };
    })
    cardBody.appendChild(editButton);


    modalClose.addEventListener('click', function () {
        modalBg.classList.remove('bg-active');
    })

    const deleteButton = document.createElement("button")
    deleteButton.className = "btn btn-danger";
    deleteButton.style = "background-color: #f1491a";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', function () {
        deleteShelterAnimal(shelterAnimal.animalId);
        showAlert('Shelter Animal Deleted', 'danger');
    });
    cardBody.appendChild(deleteButton);

    return newShelterAnimal;
}

function deleteShelterAnimal(animalId) {
    axios.delete('http://localhost:8080/removeShelterAnimal/' + animalId)
        .then(() => getShelterAnimal())
        .catch(err => console.error(err));
}

document.getElementById("shelterAnimalForm").addEventListener('submit', function(event) {
    event.preventDefault();

    if (this.animalType.value === '' || this.name.value === '' || this.age.value === '' || this.gender.value === '' || this.breed.value === '' || this.size.value === '' || this.location.value === '' || this.additionalInformation.value === '') {
        showAlert('Please fill in fields', 'danger');
    } else {
        showAlert('Success!', 'success');

        const data = {

            animalType: this.animalType.value,
            name: this.name.value,
            age: this.age.value,
            gender: this.gender.value,
            breed: this.breed.value,
            size: this.size.value,
            location: this.location.value,
            additionalInformation: this.additionalInformation.value,
        };

        axios.post('http://localhost:8080/createShelterAnimal', data)
            .then(() => {
                this.reset();
                this.name.focus();
                getShelterAnimal();
            })
            .catch(err => console.error(err));
    }

});


document.getElementById("modal-form").addEventListener('submit', function(event) {
    event.preventDefault();

    if (this.animalType.value === '' || this.name.value === '' || this.age.value === '' || this.gender.value === '' || this.breed.value === '' || this.size.value === '' || this.location.value === '' || this.additionalInformation.value === '') {
        showAlert('Please fill in fields', 'danger');
    } else {
        showAlert('Success!', 'success');

        const data = {
            animalType: this.animalType.value,
            name: this.name.value,
            age: this.age.value,
            gender: this.gender.value,
            breed: this.breed.value,
            size: this.size.value,
            location: this.location.value,
            additionalInformation: this.additionalInformation.value,
        };

        axios.put('http://localhost:8080/updateShelterAnimal/' + animalId, data)
            .then(() => {
                this.reset();
                modalBg.classList.remove('bg-active');
                this.name.focus();
                getShelterAnimal();
            })

            .catch(err => console.error(err));
    }

})

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.main-container');
    const header = document.querySelector('.header');
    container.insertBefore(div, header);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

getShelterAnimal();