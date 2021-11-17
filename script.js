const shootBTN = document.querySelector(".game__shootBTN");
const restartBTN = document.querySelector(".game__restartBTN");

const shipsArray = [];

class Ships {
  constructor(type, hitPoints, health) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.health = health;
  }

  createMotherShips(amt) {
    for (let i = 0; i < amt; i++) {
      shipsArray.push(motherShips);
    }
  }

  createDefenceShips(amt) {
    for (let i = 0; i < amt; i++) {
      shipsArray.push(defenceShips);
    }
  }

  createAttackShips(amt) {
    for (let i = 0; i < amt; i++) {
      shipsArray.push(attackShips);
    }
  }
}

const motherShips = new Ships("motherShip", 9, 100);
motherShips.createMotherShips(1);
// create defence ships using class method
const defenceShips = new Ships("defenceShip", 10, 80);
defenceShips.createDefenceShips(6);

// create attackships using class method

const attackShips = new Ships("attackShip", 12, 45);
attackShips.createAttackShips(8);

console.log(shipsArray); // your goal.. is the  get an array, with ship objects, and those ship objects need to come from a class

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

  const winningMessage = () => {
    if (motherShips.health <= 1) {
      winningPopUp.innerHTML = `
    <div>
      <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
      </h1>
      <i id="happyface__grin" class="fas fa-grin-stars fa-7x "></i>
    </div>`;
    } else if (
      defenceShips.health <= 0 &&
      attackShips.health <= 0 &&
      motherShips.health <= 0
    ) {
      winningPopUp.innerHTML = `
    <div>
      <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
      </h1>
      <i id="happyface__grin" class="fas fa-grin-stars fa-7x "></i>
    </div>`;
    }
    return winningMessage;
  };

  winningMessage();
};

shootBTN.addEventListener("click", handleShoot);

// restartBTN.addEventListener("click", location.reload())
