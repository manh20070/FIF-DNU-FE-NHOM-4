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
// DANH SÁCH ĐƠN

const requests = [

    {
        id: 1,
        user: "Nguyễn Văn A",
        pet: "Milu",
        status: "Chờ duyệt"
    },

    {
        id: 2,
        user: "Trần Văn B",
        pet: "Tom",
        status: "Chờ duyệt"
    }

];

const requestList = document.getElementById("requestList");

// HIỂN THỊ ĐƠN

function hienThiDon(){

    requestList.innerHTML = "";

    requests.forEach((request,index) => {

        requestList.innerHTML += `
        
        <tr>

            <td>${request.id}</td>

            <td>${request.user}</td>

            <td>${request.pet}</td>

            <td>
                ${request.status}
            </td>

            <td>

    <button class="duyet" onclick="duyetDon(${index})">
        Duyệt
    </button>

    <button class="tuchoi" onclick="tuChoiDon(${index})">
        Từ chối
    </button>

</td>

        </tr>

        `;
    });

}

// HIỂN THỊ

hienThiDon();

// DUYỆT

function duyetDon(index){

    requests[index].status = "Đã duyệt";

    hienThiDon();

}

// TỪ CHỐI

function tuChoiDon(index){

    requests[index].status = "Từ chối";

    hienThiDon();

}