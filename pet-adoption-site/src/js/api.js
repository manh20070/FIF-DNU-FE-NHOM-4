const apiUrl = './src/data/pets.json';

async function fetchPets() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const pets = await response.json();
        return pets;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export { fetchPets };