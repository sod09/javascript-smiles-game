const shootBTN = document.querySelector(".game__shootBTN");
const restartBTN = document.querySelector(".game__restartBTN");
const gridContainer = document.querySelector(".game__sadfaces");
const winningPopUp = document.querySelector(".winning__message");

// an array to contain the ships in the game
const shipsArray = [];

// taking an OOP approach, create a class for the ships and then methods to create the ships themselves
class Ships {
  constructor(type, amt, hitPoints, health) {
    this.type = type;
    this.amt = amt;
    this.hitPoints = hitPoints;
    this.health = health;
  }

  static createShips(type, amt, hitPoints, health) {
    for (let i = 0; i < amt; i++) {
      // create the ships with the values in the parameters
      const shipGenerator = new Ships(type, amt, hitPoints, health);
      // push to array
      shipsArray.push(shipGenerator);
    }
  }

  // static createMotherShips(amt) {
  //   for (let i = 0; i < amt; i++) {
  //     // create the ships with the values in the parameters
  //     const motherShips = new Ships("motherShip", 9, 100);
  //     // push to array
  //     shipsArray.push(motherShips);
  //   }
  // }

  // // static method, allows you to call the method on the class itself
  // static createDefenceShips(amt) {
  //   for (let i = 0; i < amt; i++) {
  //     const defenceShips = new Ships("defenceShip", 10, 80);
  //     shipsArray.push(defenceShips);
  //   }
  // }

  // static createAttackShips(amt) {
  //   for (let i = 0; i < amt; i++) {
  //     const attackShips = new Ships("attackShip", 12, 45);
  //     shipsArray.push(attackShips);
  //   }
  // }

  // this method creates the HTML ships in the game, it loops through and for every ship appends the correct div and classes
  static createHTMLShips() {
    for (let i = 0; i < shipsArray.length; i++) {
      // if the ship is mothership then....
      if (shipsArray[i].type === "motherShip") {
        // create a div for the <i> tag to sit in and a hitpoints div add relevant classes and then append both to the div in the grid container
        const createShipDiv = document.createElement("div");
        createShipDiv.classList.add("sadface__angrycontainer");
        const createiTag = document.createElement("i");
        createiTag.classList.add(
          "sadface__angry",
          "sad__faces",
          "fas",
          "fa-angry",
          "fa-4x"
        );
        createShipDiv.appendChild(createiTag);
        const createHitPointsDiv = document.createElement("div");
        createHitPointsDiv.classList.add("sadface__angryhitpoints");
        createHitPointsDiv.innerHTML = `${shipsArray[i].health}`;
        createShipDiv.appendChild(createHitPointsDiv);
        gridContainer.appendChild(createShipDiv);

        // if ship health less than 1, then remove hitpoints from display and add new class with new smiley face/colour
        if (shipsArray[i].health <= 1) {
          shipsArray[i].health = "";
          createiTag.classList.remove(
            "sadface__angry",
            "sad__faces",
            "fas",
            "fa-angry",
            "fa-4x"
          );
          createiTag.classList.add("fas", "fa-grin-stars", "fa-4x");
          createiTag.style.color = "#FF2DA0";
        }
      }
    }

    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "defenceShip") {
        const createShipDiv = document.createElement("div");
        createShipDiv.classList.add(`sadface__crycontainer${[i]}`);

        const createiTag = document.createElement("i");
        createiTag.classList.add(
          "sad__facescry",
          "sad__faces",
          "fas",
          "fa-sad-cry",
          "fa-4x"
        );
        createShipDiv.appendChild(createiTag);
        const createHitPointsDiv = document.createElement("div");
        createHitPointsDiv.classList.add(`sadface__cryhitpoints${[i]}`);
        createHitPointsDiv.innerHTML = `${shipsArray[i].health}`;
        createShipDiv.appendChild(createHitPointsDiv);
        gridContainer.appendChild(createShipDiv);

        if (shipsArray[i].health < 1) {
          shipsArray[i].health = "";
          createiTag.classList.remove(
            "sad__facescry",
            "sad__faces",
            "fas",
            "fa-sad-cry",
            "fa-4x"
          );
          createiTag.classList.add("fas", "fa-smile-wink", "fa-4x");
          createiTag.style.color = "#FF2DA0";
        }
      }
    }

    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "attackShip") {
        const createShipDiv = document.createElement("div");
        createShipDiv.classList.add(`sadface__tearcontainer${[i]}`);

        const createiTag = document.createElement("i");
        createiTag.classList.add(
          "sad__facetears",
          "sad__faces",
          "fas",
          "fa-sad-tear",
          "fa-4x"
        );
        createShipDiv.appendChild(createiTag);
        const createHitPointsDiv = document.createElement("div");
        createHitPointsDiv.classList.add(`sadface__tearhitpoints${[i]}`);
        createHitPointsDiv.innerHTML = `${shipsArray[i].health}`;
        createShipDiv.appendChild(createHitPointsDiv);
        gridContainer.appendChild(createShipDiv);

        if (shipsArray[i].health < 1) {
          shipsArray[i].health = "";
          createiTag.classList.remove(
            "sad__facetears",
            "sad__faces",
            "fas",
            "fa-sad-tear",
            "fa-4x"
          );
          createiTag.classList.add("fas", "fa-smile", "fa-4x");
          createiTag.style.color = "#FF2DA0";
        }
      }
    }
  }
}

// call the method within ships to create ships and push to an array
// Ships.createMotherShips(1);
// Ships.createDefenceShips(6);
// Ships.createAttackShips(8);
// Ships.createHTMLShips();

Ships.createShips("motherShip", 1, 9, 100);
Ships.createShips("defenceShip", 6, 9, 80);
Ships.createShips("attackShip", 8, 12, 45);
console.log(shipsArray);
Ships.createHTMLShips();

// cvreate global variable to allocate ship in array

let randomShip;

// programming method called recursion, like a for loop in a function - function runs itself until it gives us the desired outcome
const getRandomShip = () => {
  randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];
  if (randomShip.health < 1) {
    getRandomShip();
  }
};

const handleShoot = () => {
  // taking the shipsArray and using the math method to randomly select an item/index in the array
  getRandomShip();

  // everytime it clicks, we need to deduct hitPoints
  const totalHealth = randomShip.health;
  const hitPoints = randomShip.hitPoints;
  const deductPointsFromHealth = totalHealth - hitPoints;
  randomShip.health = deductPointsFromHealth;

  // loop array and if mothership health = 0 then WIN + winning message
  shipsArray.forEach(function (i) {
    if (i.type === "motherShip" && i.health <= 1) {
      winningPopUp.innerHTML = `
        <div class="winning__div">
          <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
          </h1>
          <i id="happyface__grin" class="fas fa-grin-stars fa-7x"></i>
        </div>`;
    }
  });

  // clear html on each click and run ships methods again to recreate html with updated hit points in the inner html
  gridContainer.innerHTML = "";
  Ships.createHTMLShips();
};

shootBTN.addEventListener("click", handleShoot);

document
  .querySelector(".game__restartBTN")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("game__restartBTN")) {
      location.reload();
    }
  });
