document.getElementById("loadDogBtn").addEventListener("click", loadDog);

function loadDog() {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: {
      "x-api-key": "live_kTAxRtyRHOOgJv3bnqCVoSt7w1OuwnLPlOUr5BEjArB3zYZvQgDzeDRzKHsgNJXX"
    }
  })
    .then(res => res.json())
    .then(data => {
      const imageUrl = data[0].url;
      document.getElementById("dogImage").src = imageUrl;
    })
    .catch(err => console.error(err));
}
