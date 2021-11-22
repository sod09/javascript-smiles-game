const shootBTN = document.querySelector(".game__shootBTN");
const restartBTN = document.querySelector(".game__restartBTN");
const gridContainer = document.querySelector(".game__sadfaces")

const shipsArray = [];

class Ships {
  constructor(type, hitPoints, health) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.health = health;
  }

  static createMotherShips(amt) {
    for (let i = 0; i < amt; i++) {
      const motherShips = new Ships("motherShip", 9, 100);
      shipsArray.push(motherShips);
    }
  }

  // static method, allows you to call the method on the class itself
  static createDefenceShips(amt) {
    for (let i = 0; i < amt; i++) {
      const defenceShips = new Ships("defenceShip", 10, 80);
      shipsArray.push(defenceShips);

    }
  }

  static createAttackShips(amt) {
    for (let i = 0; i < amt; i++) {
      const attackShips = new Ships("attackShip", 12, 45);
      shipsArray.push(attackShips);
    }
  }

  static createHTMLShips () {
    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "motherShip") {
       const createShipDiv = document.createElement("div");
       createShipDiv.classList.add("sadface__angrycontainer");
       const createiTag = document.createElement("i");
       createiTag.classList.add("sadface__angry", "sad__faces", "fas", "fa-angry", "fa-7x");
       
       createShipDiv.appendChild(createiTag);
       const createHitPointsDiv = document.createElement("div");
       createHitPointsDiv.classList.add("sadface__angryhitpoints");
       createHitPointsDiv.innerHTML = `${shipsArray[i].health}`
       createShipDiv.appendChild(createHitPointsDiv);
       gridContainer.appendChild(createShipDiv);
       
      }
    }

    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "defenceShip") {
       const createShipDiv = document.createElement("div");
       createShipDiv.classList.add(`sadface__crycontainer${[i]}`);
       console.log(`sadface__crycontainer${[i]}`);
       const createiTag = document.createElement("i");
       createiTag.classList.add("sad__facescry", "sad__faces", "fas", "fa-sad-cry", "fa-5x");
       createShipDiv.appendChild(createiTag);
       const createHitPointsDiv = document.createElement("div");
       createHitPointsDiv.classList.add(`sadface__cryhitpoints${[i]}`);
       console.log(`sadface__cryhitpoints${[i]}`);
       createHitPointsDiv.innerHTML = `${shipsArray[i].health}`
       createShipDiv.appendChild(createHitPointsDiv);
       gridContainer.appendChild(createShipDiv);
       
      }
    }
    
    
    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "attackShip") {
       const createShipDiv = document.createElement("div");
       createShipDiv.classList.add(`sadface__tearcontainer${[i]}`);
       console.log(`sadface__tearcontainer${[i]}`);
       const createiTag = document.createElement("i");
       createiTag.classList.add("sad__facetears", "sad__faces", "fas", "fa-sad-tear", "fa-5x");
       createShipDiv.appendChild(createiTag);
       const createHitPointsDiv = document.createElement("div");
       createHitPointsDiv.classList.add(`sadface__tearhitpoints${[i]}`);
       createHitPointsDiv.innerHTML = `${shipsArray[i].health}`
       createShipDiv.appendChild(createHitPointsDiv);
       gridContainer.appendChild(createShipDiv);
       
      }

    }
  }
}




// call the method within ships to create ships and push to an array
Ships.createMotherShips(1);

Ships.createDefenceShips(6);

Ships.createAttackShips(8);

Ships.createHTMLShips();

const handleShoot = () => {
  // taking the shipsArray and using the math method to randomly select an item/index in the array
  const randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];

  // everytime it clicks, we need to deduct hitPoints
  const nameOfShip = randomShip.type;
  const totalHealth = randomShip.health;
  const hitPoints = randomShip.hitPoints;
  const deductPointsFromHealth = totalHealth - hitPoints;

  randomShip.health = deductPointsFromHealth;

  

  // use class/selector for innerHTML 

  console.log(`The ${nameOfShip} is now ${deductPointsFromHealth}`);

  console.log(deductPointsFromHealth);

  // if mothership health = 0 then WIN + winning message
  const winningPopUp = document.querySelector(".winning__message");

  const removeShipFromArrayWhenZeroPoints = shipsArray.indexOf(randomShip);
  if (randomShip.health <= 0) {
    shipsArray.splice(removeShipFromArrayWhenZeroPoints, 1);
  }
 
  shipsArray.forEach(function(i) {
    if (i.type === "motherShip") {

      const mothershipHealth = i.health;
      const mothershipHitPoints = document.querySelector(".sadface__angryhitpoints")

      mothershipHitPoints.innerHTML = mothershipHealth;

    
    }

    // if (i.type === "defenceShip") {
    //   const defenceShipHealth = i.health;
    //   const defenceShipHitPoints = document.querySelector(".sadface__cryhitpoints1")

    //   defenceShipHitPoints.innerHTML = defenceShipHealth;
    // }
  })


  shipsArray.forEach(function (i) {
    if (i.type === "motherShip" && i.health <= 1) {
      winningPopUp.innerHTML = `
        <div>
          <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
          </h1>
          <i id="happyface__grin" class="fas fa-grin-stars fa-7x "></i>
        </div>`;
    }

 

  });

  const checkArrayLengthForWin = () => {
    if (shipsArray.length < 1) {
      winningPopUp.innerHTML = `
      <div>
        <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
        </h1>
        <i id="happyface__grin" class="fas fa-grin-stars fa-7x "></i>
      </div>`;
      console.log("no more array win");
      return checkArrayLengthForWin;
    }
  };

  console.log(shipsArray);

  checkArrayLengthForWin()

}


shootBTN.addEventListener("click", handleShoot);
