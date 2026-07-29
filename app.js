const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

//exercise 3

game.difficulty = "Easy";

/*
Exercise 4
Solve Exercise 4 here:
*/
const starter = pokemon.find(function(pokemon){
    return pokemon.starter === true;
});
game.party.push(starter);


/*
Exercise 5
Solve Exercise 5 here:
*/

const filterpokemon = pokemon.filter(function(pokemon){
    return pokemon.type === "grass";
});

game.party.push(filterpokemon[0],filterpokemon[1],filterpokemon[2]);

/*
Exercise 6
Solve Exercise 6 here:
*/

for(const gym of game.gyms){
    if(gym.difficulty < 3){
        gym.completed = "true";
    }
}

/*
Exercise 7
Solve Exercise 7 here:
*/

game.party.splice(0,1,pokemon[1]);
game.party.splice(3,4,pokemon[4]);
game.party.splice(6,7,pokemon[7]);
game.party.splice(24,25,pokemon[25]);

console.log("exercise 7:" ,game.party);

/*
Exercise 8
Solve Exercise 8 here: 
*/

for (const pokemon of game.party){
    console.log("exercise 8:",pokemon.name);
}

/*
Exercise 9
Solve Exercise 9 here:
*/ 

for (const pokemon1 of pokemon){
    if(pokemon1.starter === true){
        console.log("exercise 9: ",pokemon1.name);
    }
}

/*Exercise 10
Solve exercise 10 here: 
*/
game.catchPokemon = function(pokemonObj){
    game.party.push(pokemonObj);
};
console.log("exercise 10:", game.party)

/*Exercise 11
Solve exercise 11 here:
*/
game.catchPokemon = function(pokemonObj){
    game.party.push(pokemonObj);

 const pokeball = game.items.find(function(item){
    return item.name === "pokeball";
 });
 pokeball.quantity -=1;
};
game.catchPokemon(pokemon[10]);

console.log("Exercise 11:", game.items);


/*
Exercise 12
Solve Exercise 12 here:
*/

for (const gym of game.gyms) {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
}

console.log("Exercise 12:", game.gyms);

/*
Exercise 13
*/
game.gymStatus = function() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };

  for (const gym of game.gyms) {
    if (gym.completed === true) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  }

  console.log("exercise1 13:",gymTally);
};

game.gymStatus();

/*
Exercise 14
*/
game.partyCount = function() {
  return game.party.length;
};

console.log("Exercise 14:", game.partyCount());


//Exercise 15
for (const gym of game.gyms) {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
}

console.log("Exercise 15:", game.gyms);

//Exercise 16
console.log("Exercise 16:", game);

