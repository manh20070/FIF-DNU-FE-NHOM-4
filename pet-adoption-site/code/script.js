let pets = [

  {
    id:1,
    name:"Milo",
    species:"Chó",
    age:2,

    image:
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200",

    description:
    "Chú chó husky cực kỳ thân thiện.",

    status:"Còn"
  },

  {
    id:2,
    name:"Luna",
    species:"Mèo",
    age:1,

    image:
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200",

    description:
    "Mèo đáng yêu thích được vuốt ve.",

    status:"Đang chờ"
  },

  {
    id:3,
    name:"Coco",
    species:"Chó",
    age:1,

    image:
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200",

    description:
    "Corgi năng động và đáng yêu.",

    status:"Còn"
  }
];

function getBadgeClass(status){

  if(status === "Còn"){
    return "available";
  }

  if(status === "Đang chờ"){
    return "pending";
  }

  return "adopted";
}

function renderPets(){

  const petList =
    document.getElementById("petList");

  petList.innerHTML = "";

  const keyword =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const species =
    document.getElementById("filterSpecies")
    .value;

  const filtered = pets.filter(pet => {

    const matchKeyword =
      pet.name.toLowerCase().includes(keyword);

    const matchSpecies =
      species === "all" ||
      pet.species === species;

    return matchKeyword && matchSpecies;
  });

  filtered.forEach(pet => {

    petList.innerHTML += `

      <div class="card">

        <img src="${pet.image}">

        <div class="card-body">

          <h3>${pet.name}</h3>

          <div class="rating">
            ⭐⭐⭐⭐⭐
          </div>

          <span class="badge ${getBadgeClass(pet.status)}">
            ${pet.status}
          </span>

          <p>
            <b>Loài:</b> ${pet.species}
          </p>

          <p>
            <b>Tuổi:</b> ${pet.age}
          </p>

          <br>

          <p>
            ${pet.description}
          </p>

          <div class="card-buttons">

            <button
              class="view-btn"
              onclick="viewPet(${pet.id})"
            >
              Xem
            </button>

            <button
              class="adopt-btn"
              onclick="adoptPet('${pet.name}')"
            >
              Nhận Nuôi
            </button>

            <button class="favorite-btn">
              ❤️
            </button>

          </div>

        </div>

      </div>
    `;
  });
}

function viewPet(id){

  const pet =
    pets.find(p => p.id === id);

  document
    .getElementById("modal")
    .classList.remove("hidden");

  document
    .getElementById("modalBody")
    .innerHTML = `

      <img src="${pet.image}">

      <h2>${pet.name}</h2>

      <br>

      <p>
        ${pet.description}
      </p>

      <br>

      <p>
        ⭐ Độ dễ thương: 10/10
      </p>
    `;
}

function closeModal(){

  document
    .getElementById("modal")
    .classList.add("hidden");
}

window.onclick = function(e){

  const modal =
    document.getElementById("modal");

  if(e.target === modal){
    closeModal();
  }
}

function adoptPet(name){

  alert(
    `Bạn đã gửi yêu cầu nhận nuôi ${name} ❤️`
  );
}

function scrollToPets(){

  document
    .getElementById("pets")
    .scrollIntoView({
      behavior:"smooth"
    });
}

function toggleDarkMode(){

  document.body.classList.toggle("dark");
}

renderPets();