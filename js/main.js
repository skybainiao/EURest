let user = document.getElementById('lg');
let username = localStorage.getItem('username1');
user.onclick=()=>checkProfile();


function checkProfile(){

  if (username===null){
    window.location.href = "html/login.html";
  }
  else {
    window.location.href = "html/profile.html";
  }
}
