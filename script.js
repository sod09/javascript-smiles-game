const shootBTN = document.querySelector(".game__shootBTN");
const restartBTN = document.querySelector(".game__restartBTN");

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
}

Ships.createMotherShips(1);

Ships.createDefenceShips(6);

Ships.createAttackShips(8);

// your goal.. is the  get an array, with ship objects, and those ship objects need to come from a class

const handleShoot = () => {
  // taking the shipsArray and using the math method to randomly select an item/index in the array
  const randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];

  // deduct points from ship
  // everytime it clicks, we need to deduct hitPoints
  const nameOfShip = randomShip.type;
  const totalHealth = randomShip.health;
  const hitPoints = randomShip.hitPoints;
  const deductPointsFromHealth = totalHealth - hitPoints;

  randomShip.health = deductPointsFromHealth;

  console.log(`The ${nameOfShip} is now ${deductPointsFromHealth}`);

  console.log(deductPointsFromHealth);

  // if mothership health = 0 then WIN + winning message
  const winningPopUp = document.querySelector(".winning__message");

  const index = shipsArray.indexOf(randomShip);
  if (randomShip.health <= 0) {
    shipsArray.splice(index, 1);
  }

  const noMoreArrayWin = () => {
    if (shipsArray.length < 0) {
      winningPopUp.innerHTML = `
      <div>
        <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
        </h1>
        <i id="happyface__grin" class="fas fa-grin-stars fa-7x "></i>
      </div>`;
      console.log("no more array win");
      return noMoreArrayWin;
    }
  };

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

  console.log(shipsArray);
};

shootBTN.addEventListener("click", handleShoot);

// restartBTN.addEventListener("click", location.reload())

// loop through the shipsArray and check each ships health

// conditions
// if currentindex.name = mothership and health = 0
//
// if 0 remove from array
// if array.length = 0 also gameover
