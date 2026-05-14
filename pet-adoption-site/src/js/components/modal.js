function openModal(pet) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${pet.name}</h2>
            <img src="${pet.image}" alt="${pet.name}" />
            <p>Age: ${pet.age}</p>
            <p>Breed: ${pet.breed}</p>
            <button class="adopt-button">Adopt ${pet.name}</button>
        </div>
    `;

    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.remove();
    });

    const adoptButton = modal.querySelector('.adopt-button');
    adoptButton.addEventListener('click', () => {
        alert(`Thank you for adopting ${pet.name}!`);
        modal.remove();
    });
}

export default openModal;