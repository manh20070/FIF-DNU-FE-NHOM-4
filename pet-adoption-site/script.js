let pets = [
  {
    id:1,
    name:"Milo",
    species:"Chó",
    age:2,
    image:"https://placedog.net/500",
    description:"Chú chó thân thiện và đáng yêu.",
    status:"Còn"
  },

  {
    id:2,
    name:"Luna",
    species:"Mèo",
    age:1,
    image:"https://placekitten.com/500/300",
    description:"Mèo dễ thương thích ngủ.",
    status:"Đang chờ"
  }
];

let adoptions = [];

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

          <span class="badge ${getBadgeClass(pet.status)}">
            ${pet.status}
          </span>

          <p><b>Loài:</b> ${pet.species}</p>
          <p><b>Tuổi:</b> ${pet.age}</p>

          <div class="card-buttons">

            <button
              class="view-btn"
              onclick="viewPet(${pet.id})"
            >
              Xem
            </button>

            ${
              pet.status !== "Đã được nhận"
              ?
              `
              <button
                class="adopt-btn"
                onclick="openAdoptionForm(${pet.id})"
              >
                Nhận Nuôi
              </button>
              `
              :
              ""
            }

          </div>

        </div>

      </div>
    `;
  });

  renderAdminPets();
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
        <b>Loài:</b> ${pet.species}
      </p>

      <p>
        <b>Tuổi:</b> ${pet.age}
      </p>

      <br>

      <p>
        ${pet.description}
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

function openAdoptionForm(id){

  const pet =
    pets.find(p => p.id === id);

  document
    .getElementById("modal")
    .classList.remove("hidden");

  document
    .getElementById("modalBody")
    .innerHTML = `

      <h2>
        Đăng Ký Nhận Nuôi ${pet.name}
      </h2>

      <br>

      <form onsubmit="submitAdoption(event, ${pet.id})">

        <input
          type="text"
          id="fullname"
          placeholder="Họ và tên"
          required
        >

        <input
          type="text"
          id="phone"
          placeholder="Số điện thoại"
          required
        >

        <button type="submit">
          Gửi Đơn
        </button>

      </form>
    `;
}

function submitAdoption(event, petId){

  event.preventDefault();

  const fullname =
    document.getElementById("fullname").value;

  const phone =
    document.getElementById("phone").value;

  const pet =
    pets.find(p => p.id === petId);

  adoptions.push({
    fullname,
    phone,
    petName:pet.name,
    status:"Đang chờ duyệt"
  });

  renderAdoptions();

  closeModal();

  alert("Đăng ký nhận nuôi thành công!");
}

function renderAdoptions(){

  const table =
    document.getElementById("adoptionTable");

  table.innerHTML = "";

  adoptions.forEach(item => {

    table.innerHTML += `
      <tr>

        <td>${item.fullname}</td>

        <td>${item.petName}</td>

        <td>${item.phone}</td>

        <td>${item.status}</td>

      </tr>
    `;
  });
}

document
  .getElementById("petForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const pet = {

      id:Date.now(),

      name:
        document.getElementById("petName").value,

      species:
        document.getElementById("petSpecies").value,

      age:
        document.getElementById("petAge").value,

      image:
        document.getElementById("petImage").value,

      description:
        document.getElementById("petDescription").value,

      status:
        document.getElementById("petStatus").value
    };

    pets.push(pet);

    renderPets();

    this.reset();
});

function renderAdminPets(){

  const grid =
    document.getElementById("adminPetGrid");

  grid.innerHTML = "";

  pets.forEach(pet => {

    grid.innerHTML += `

      <div class="card">

        <img src="${pet.image}">

        <div class="card-body">

          <h3>${pet.name}</h3>

          <br>

          <button
            class="edit-btn"
            onclick="editPet(${pet.id})"
          >
            Sửa
          </button>

          <br><br>

          <button
            class="delete-btn"
            onclick="deletePet(${pet.id})"
          >
            Xóa
          </button>

        </div>

      </div>
    `;
  });
}

function editPet(id){

  const pet =
    pets.find(p => p.id === id);

  document.getElementById("petName").value =
    pet.name;

  document.getElementById("petSpecies").value =
    pet.species;

  document.getElementById("petAge").value =
    pet.age;

  document.getElementById("petImage").value =
    pet.image;

  document.getElementById("petDescription").value =
    pet.description;
}

function deletePet(id){

  pets =
    pets.filter(p => p.id !== id);

  renderPets();
}

function showSection(id){

  document
    .getElementById("publicSection")
    .classList.add("hidden");

  document
    .getElementById("adminSection")
    .classList.add("hidden");

  document
    .getElementById(id)
    .classList.remove("hidden");
}

renderPets();

renderAdoptions();