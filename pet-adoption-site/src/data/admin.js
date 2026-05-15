const pets = [
    {
        id: 1,
        name: "Milu",
        type: "Chó",
        age: 2
    },
    {
        id: 2,
        name: "Tom",
        type: "Mèo",
        age: 1
    }
];

const petList = document.getElementById("petList");

// HIỂN THỊ THỐNG KÊ

document.getElementById("tongThuCung").innerText = pets.length;

document.getElementById("tongDon").innerText = 5;

document.getElementById("tongUser").innerText = 20;

// HÀM HIỂN THỊ BẢNG

function hienThiPets(){

    petList.innerHTML = "";

    pets.forEach((pet,index) => {

        petList.innerHTML += `
        
        <tr>

            <td>${pet.id}</td>

            <td>${pet.name}</td>

            <td>${pet.type}</td>

            <td>${pet.age}</td>

            <td>
                <button onclick="xoaPet(${index})">
                    Xóa
                </button>
            </td>

        </tr>

        `;
    });

}

// CHẠY HIỂN THỊ

hienThiPets();

// THÊM

function themPet(){

    const name = document.getElementById("name").value;

    const type = document.getElementById("type").value;

    const age = document.getElementById("age").value;

    const pet = {
        id: pets.length + 1,
        name: name,
        type: type,
        age: age
    };

    pets.push(pet);

    hienThiPets();

}

// XÓA

function xoaPet(index){

    pets.splice(index,1);

    hienThiPets();

}