
async function getData(url = '') {
  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: "follow",
    referrerPolicy: "no-referrer"
  });

  return res.json();
}

async function postData(url = '', data = {}) {
  const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data)
  }).catch((e) => {
      console.error('Error:', e);
    }); 
  return res.json();
}

getData("https://reqres.in/api/users/2")
  .then(res => {
    console.log(res);
    document.getElementById("GETFname").innerHTML = res.data.first_name;
    document.getElementById("GETLname").innerHTML = res.data.last_name;
  });

const login = {
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

function POST() {
  postData("https://reqres.in/api/login", login)
    .then(res => {
      console.log(res);
      document.getElementById("res").innerHTML = res.token;
    });
}
