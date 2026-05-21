const users = [
    {
        email: "admin@gmail.com",
        password: "123",
        role: "admin"
    },
    {
        email: "user@gmail.com",
        password: "123",
        role: "user"
    }
];

function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const thongBao = document.getElementById("thongBao");

    const user = users.find(u => 
        u.email === email && u.password === password
    );

    if(user){

        if(user.role === "admin"){
            alert("Đăng nhập Admin thành công");

            window.location.href = "admin.html";
        }
        else{
            alert("Đăng nhập User thành công");

            window.location.href = "index.html";
        }

    }
    else{
        thongBao.innerText = "Sai tài khoản hoặc mật khẩu";
    }

}