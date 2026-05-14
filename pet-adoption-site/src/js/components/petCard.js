function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = 'pet-card';

    const img = document.createElement('img');
    img.src = pet.image;
    img.alt = `${pet.name} the ${pet.breed}`;
    card.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = pet.name;
    card.appendChild(name);

    const age = document.createElement('p');
    age.textContent = `Age: ${pet.age} years`;
    card.appendChild(age);

    const breed = document.createElement('p');
    breed.textContent = `Breed: ${pet.breed}`;
    card.appendChild(breed);

    const adoptButton = document.createElement('button');
    adoptButton.textContent = 'Adopt Me!';
    adoptButton.onclick = () => {
        // Logic to open modal for adoption process
    };
    card.appendChild(adoptButton);

    return card;
}

export default createPetCard;