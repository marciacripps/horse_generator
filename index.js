const horseImage = document.getElementById('horse-image');
const horseBreed = document.getElementById('horse-breed');
const button = document.getElementById('generate-horse');

//"breeds api"
const horses = [
    {
        breed: 'Arabian',
        image: 'https://www.bayequest.com/wp-content/uploads/2024/01/Arabian.png'
    },
    {
        breed: 'Thoroughbred',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXcPYU7b4aw3pIGAQCmfwfcz2EH6slvu_Xw&s'
    },
    {
        breed: 'Quarter Horse',
        image: 'https://cdn.britannica.com/91/1291-050-31012E36/stallion-American-Quarter-Horse-buckskin-coat.jpg'
    },
    {
        breed: 'Mustang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJTu7gp4FFM_4vLoc49CA_xxo0reLMww-5A&s'
    },
    {
        breed: 'Friesian',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Friesian_Stallion.jpg'
    }
];

function getRandomHorse() {
    const randomIndex = Math.floor(Math.random() * horses.length);
    return horses[randomIndex];
}

button.addEventListener('click', () => {
    const randomHorse = getRandomHorse();
    horseImage.src = randomHorse.image;
    horseBreed.textContent = randomHorse.breed;
});
