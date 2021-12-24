const people = ['yoshi', 'ruy', 'chin','mario'];
const ages = [20, 25, 30, 35];

console.log(people)

// Now we're going to make it so that the people constant is actually usable through the xyz const on the modules.js page
//module.exports = 'hello'
// Whatever we put after module.exports = is exported to the xyz (require) const in modules.js'
module.exports = {
    people: people, 
    ages: ages
}; // this way we can export multiple data points from this file to modules.js and access them via the const xyz = require()
