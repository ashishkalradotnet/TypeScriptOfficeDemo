console.log ('Loading Player Module');
// private members
var playerName = '';

function logPlayer () {
  console.log ('The current player is ' + playerName + '.');
}

function setName (newName) {
  playerName = newName;
}

function getName () {
  return playerName;
}

module.exports.logPlayer = logPlayer;
module.exports.setName = setName;
module.exports.getName = getName;
