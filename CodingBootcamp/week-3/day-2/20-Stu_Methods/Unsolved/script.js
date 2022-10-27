var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
planets.pop();
var galaxies = constellations.concat(planets);

var space = star.toUpperCase();

console.log(space);
console.log('Galaxies', galaxies);
console.log('Constellations', constellations);