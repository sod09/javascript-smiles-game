

// ** click the button 
// ** it finds a random face/ship in the game - via an array of the faces/ships
// *alert the ship that's going to be deducted 


const shipsArray = [ "mothership", "defenceship", "attackship"];

const selectRandomShip = () => {
const randomShip = shipsArray[Math.floor(Math.random()*shipsArray.length)];
alert (randomShip)
}


const shootBTN = document.querySelector(".game__shootBTN");



shootBTN.addEventListener("click", selectRandomShip)



// ** create object/class of the ships - connected to the dom?
// **loop map through the faces in the dom ? 
// ** create array 


















// create a class for the ships
// create the ships
// create a method to deduct damage points from totalHitPoints 
//  create array of the ships 
// create a variable that randomly chooses an index item from the array 
// deduct the hitpoints from random index item selected 
// update the score

// once it reaches certain hitPoints change faces 

// gamover if you reach 100


// class gameShips {
//   constructor (type, totalHitPoints, damagePoints ){
//   this.type = type;
//   this. totalHitPoints = totalHitPoints;
//   this.damagePoints = damagePoints;
//   }
// // function to deduct damage from total hit points 
//   takeDamage() {
//     this.totalHitPoints = this.totalHitPoints - this.damagePoints;
//   }

//   // function to create defence smiles and add to array 

//   createDefenceSmileys (amt) {
//     for(let i=0; i < amt; i++) {

//     const defenceSmiley = new defenceSmiley.ships.push(defenceSmiley)
//     console.log(createDefenceSmileys(10));
//   }
// }

// // functio to create attack smiles and add to array 

//   createAttackSmileys(amt) {
//     for(let i=0; i < amt; i++) {

//       const attackSmiley = new attackSmiley.ships.push(attackSmiley)
//       console.log(createAttackSmileys(10));
//   }
// }
// // function to create mothership and add to array
//     createMothership (amt) {
//     const motherShipSmiley = new motherShipSmiley.ships.push(attackSmiley)
//     console.log(createAttackSmileys(10));
// }

//   // variable for the array 
//   const ships = []
//   console.log(ships);

// // create the array 

//     smileyArray ()  {
//       motherShipSmiley.ships.push()
//       attackSmiley.ships.push()
//       defenceSmiley.ships.push()    
//     }

// // choose random item in the array 

// const randomSmiley = ships.[Math.floor(Math.random()*ships.length)];

// // deduct hitPoints from random item in the array 

//     deductHitPoints () {
//       randomSmiley - this.damagePoints;
//     }

//     // deduct from UI score 

//     deduct


// }



