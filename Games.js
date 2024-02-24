let animals;
let selectedAnimal;
let score = 0;

function fetchFunctiondata() {
  fetch("Game.json")
    .then((res) => res.json())
    .then((data) => {
      animals = data;
      displayAnimals();
    });
}

function displayAnimals() {
  const gamesImageContainer = document.querySelector(".GameImages");
  gamesImageContainer.innerHTML = "";
  animals.forEach((animal) => {
    const animalElement = document.createElement("div");

    // image
    const imagelElement = document.createElement("img");
    // imagelElement.src = animal.image;
    // imagelElement.alt = animal.name;
    imagelElement.src =
      "https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg";

    imagelElement.style.width = "70px";
    imagelElement.style.height = "70px";
    imagelElement.style.cursor = "pointer";
    imagelElement.style.borderRadius = "5px";
    

    imagelElement.addEventListener("click", () => {
      if (selectedAnimal === animal.name) {
        score++;
        imagelElement.src = animal.image;
        imagelElement.alt = animal.name;
        nameElement.textContent = animal.name;
        document.querySelector(".Score").textContent = "Score: " + score;
        // alert("Correct! Score: " + score);
      }
    });

    const nameElement = document.createElement("div");

    nameElement.style.textAlign = "center";
    nameElement.style.fontSize = "1rem";
    nameElement.style.color = "aqua";

    animalElement.appendChild(imagelElement);
    animalElement.appendChild(nameElement);
    gamesImageContainer.appendChild(animalElement);
  });
}

// Dropdown change event listener
document.getElementById("select").addEventListener("change", function () {
  selectedAnimal = this.value;
});

document.querySelector(".start").addEventListener("click", () => {
  location.reload();
});

fetchFunctiondata();
