// How do I import the constant declared in people.js?
// When we declare require like below, node looks for the file and then runs the file
const xyz = require('./people.js')

console.log(xyz); // require() returns an empty object ( {} ) if we don't export the data explicitly (cf. in people.js)
//console.log(people) // doesn't work, people is not defined -> importing file before doesn't give access to the file
console.log(xyz.people);
console.log(xyz.ages);

const { people } = require('./people.js') // -> this allows to extract only the 'people' property from the people.js file
console.log(people)

// const { people, ages } = require('./people.js')  -> would also work to import multiple properties from the other file