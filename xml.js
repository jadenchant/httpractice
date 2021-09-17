var getObj;

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/2", true);
xhr.onload = () => {
  getObj = JSON.parse(xhr.responseText);
  console.log(xhr.responseText);
  document.getElementById("GETFname").innerHTML = getObj.data.first_name;
  document.getElementById("GETLname").innerHTML = getObj.data.last_name;
}
xhr.send();


var postObj = {
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
function POST() {
  xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/login", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var resObj = JSON.parse(xhr.responseText);
      console.log(resObj);
      document.getElementById("res").innerHTML = resObj.token;
    } else {
      console.log("Error: 400");
    }
  }
  xhr.send("email=eve.holt@reqres.in&password=cityslicka");
}
