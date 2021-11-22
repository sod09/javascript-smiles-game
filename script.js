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
       createiTag.classList.add("sadface__angry", "sad__faces", "fas", "fa-angry", "fa-4x");
       createShipDiv.appendChild(createiTag);
       const createHitPointsDiv = document.createElement("div");
       createHitPointsDiv.classList.add("sadface__angryhitpoints");
       createHitPointsDiv.innerHTML = `${shipsArray[i].health}`
       createShipDiv.appendChild(createHitPointsDiv);
       gridContainer.appendChild(createShipDiv);
       
        
       if (shipsArray[i].health <= 1) {
        shipsArray[i].health = 0;
        createiTag.classList.remove("sadface__angry", "sad__faces", "fas", "fa-angry", "fa-4x");
        createiTag.classList.add("fas", "fa-grin-stars", "fa-4x");
        createiTag.style.color= "#FF2DA0"
      }
      }
    }

    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "defenceShip") {
       const createShipDiv = document.createElement("div");
       createShipDiv.classList.add(`sadface__crycontainer${[i]}`);
    
       const createiTag = document.createElement("i");
       createiTag.classList.add("sad__facescry", "sad__faces", "fas", "fa-sad-cry", "fa-4x");
       createShipDiv.appendChild(createiTag);
       const createHitPointsDiv = document.createElement("div");
       createHitPointsDiv.classList.add(`sadface__cryhitpoints${[i]}`);
       createHitPointsDiv.innerHTML = `${shipsArray[i].health}`
       createShipDiv.appendChild(createHitPointsDiv);
       gridContainer.appendChild(createShipDiv);

        
        if (shipsArray[i].health < 1) {
          shipsArray[i].health = 0;
          createiTag.classList.remove("sad__facescry", "sad__faces", "fas", "fa-sad-cry", "fa-4x");
          createiTag.classList.add("fas", "fa-smile-wink", "fa-4x");
          createiTag.style.color= "#FF2DA0"
        }
       
      }

    }
    
    
    for (let i = 0; i < shipsArray.length; i++) {
      if (shipsArray[i].type === "attackShip") {
       const createShipDiv = document.createElement("div");
       createShipDiv.classList.add(`sadface__tearcontainer${[i]}`);
    
       const createiTag = document.createElement("i");
       createiTag.classList.add("sad__facetears", "sad__faces", "fas", "fa-sad-tear", "fa-4x");
       createShipDiv.appendChild(createiTag);
       const createHitPointsDiv = document.createElement("div");
       createHitPointsDiv.classList.add(`sadface__tearhitpoints${[i]}`);
       createHitPointsDiv.innerHTML = `${shipsArray[i].health}`
       createShipDiv.appendChild(createHitPointsDiv);
       gridContainer.appendChild(createShipDiv);

       if (shipsArray[i].health < 1) {
        shipsArray[i].health = 0;
        createiTag.classList.remove("sad__facetears", "sad__faces", "fas", "fa-sad-tear", "fa-4x");
        createiTag.classList.add("fas", "fa-smile", "fa-4x");
        createiTag.style.color= "#FF2DA0"
      }
       
      }

    }
  }
}




// call the method within ships to create ships and push to an array
Ships.createMotherShips(1);

Ships.createDefenceShips(6);

Ships.createAttackShips(8);

Ships.createHTMLShips();

// let notAlive = false;

let randomShip;






// programming method called recursion, like a for loop in a function - function runs itself until it gives us the desired outcome  
const getRandomShip = () => {

 randomShip= shipsArray[Math.floor(Math.random() * shipsArray.length)];

  if (randomShip.health < 1) {
    getRandomShip()
  }
}









const handleShoot = () => {
  // taking the shipsArray and using the math method to randomly select an item/index in the array
  // const randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];

  getRandomShip();

  // everytime it clicks, we need to deduct hitPoints
  const nameOfShip = randomShip.type;
  const totalHealth = randomShip.health;
  const hitPoints = randomShip.hitPoints;
  const deductPointsFromHealth = totalHealth - hitPoints;

  randomShip.health = deductPointsFromHealth;

  



  console.log(`The ${nameOfShip} is now ${deductPointsFromHealth}`);

  // console.log(deductPointsFromHealth);


  // if mothership health = 0 then WIN + winning message
  const winningPopUp = document.querySelector(".winning__message");

  console.log(winningPopUp);

  // const removeShipFromArrayWhenZeroPoints = shipsArray.indexOf(randomShip);
  // if (randomShip.health <= 0) {
  //   shipsArray.splice(removeShipFromArrayWhenZeroPoints, 1);
  // }
 
  // shipsArray.forEach(function(i) {
  //   if (i.type === "motherShip") {

  //     const mothershipHealth = i.health;
  //     const mothershipHitPoints = document.querySelector(".sadface__angryhitpoints")

  //     mothershipHitPoints.innerHTML = mothershipHealth;

    
  //   }


  // })

  

  shipsArray.forEach(function (i) {
    if (i.type === "motherShip" && i.health <= 1) {
      winningPopUp.innerHTML = `
        <div>
          <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
          </h1>
          <i id="happyface__grin" class="fas fa-grin-stars fa-7x"></i>
        </div>`;
    }
    // } else if (i.health === 0) { 
    //       notAlive = true;
    // } else if (i.health > 0 ) {
    //   notAlive = false;
    // }
  });

  // const checkAlive = () => {
  //   if (notAlive) {
  //     winningPopUp.innerHTML = `
  //       <div>
  //         <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
  //         </h1>
  //         <i id="happyface__grin" class="fas fa-grin-stars fa-7x"></i>
  //       </div>`;
  //   }
  // }
  
  // checkAlive()
  // if boolean is true game over 
  // if boolean is false keep going 

  // const checkArrayLengthForWin = () => {
  //   if (shipsArray.length < 1) {
  //     winningPopUp.innerHTML = `
  //     <div>
  //       <h1>YOU WIN! YOU TURNED THAT FROWN UPSIDE DOWN!
  //       </h1>
  //       <i id="happyface__grin" class="fas fa-grin-stars fa-7x "></i>
  //     </div>`;
  //     console.log("no more array win");
  //     return checkArrayLengthForWin;
  //   }
  // };

  console.log(shipsArray);

  // checkArrayLengthForWin()

  gridContainer.innerHTML = ""

  Ships.createHTMLShips()


}


shootBTN.addEventListener("click", handleShoot);
