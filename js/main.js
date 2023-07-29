

let user = document.getElementById('lg');

user.onclick=()=>checkProfile();



function checkProfile(){
  let username = localStorage.getItem('username1');
  if (username===null){
    window.location.href = "../html/login.html";
  }
  else {
    window.location.href = "html/profile.html";
  }
}

