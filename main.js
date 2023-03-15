//console.log('Hello World!');
function auth(){
let name=document.getElementById("myname").value;
let password=document.getElementsByName("mypassword").value;
let phone=document.getElementsByName("myphone").value;
let email=document.getElementsByName("myemail").value;
if(name=="student"){
window.location.assign("index1.html");
alert("login Successful");
}
else{
  alert(name);
  alert("login failed");
  return;
}
}
function auth2(){
  let name = document.getElementsByName("name").value;
  let password = document.getElementsByName("mypass").value;
  if (name == "student") {
    window.location.assign("index1.html");
    alert("login Successful");
  }
  else {
    alert(name);
    alert("login failed");
    return;
  }
}