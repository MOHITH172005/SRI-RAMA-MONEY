// Dummy users
const ADMIN = { username: "admin", password: "1234" };
const USER  = { username: "user", password: "1234" };

function login(){
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if(role === "admin"){
    if(u === ADMIN.username && p === ADMIN.password){
      localStorage.setItem("role","admin");
      window.location = "dashboard.html";
    }else{
      alert("Invalid Admin Login");
    }
  }

  if(role === "user"){
    if(u === USER.username && p === USER.password){
      localStorage.setItem("role","user");
      window.location = "dashboard.html";
    }else{
      alert("Invalid User Login");
    }
  }
}