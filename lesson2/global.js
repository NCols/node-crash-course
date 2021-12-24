// Global object

// console.log(global);

/* // waits 3 seconds then executes content, just once
global.setTimeout(() => {
   console.log('in the timeout')
   clearInterval(int);
}, 3000);
// we don't need to type 'global.' every time, because we are in the global object

// runs the function every 1 second
const int = setInterval(() => {
    console.log('in the interval')
}, 1000);
 */


// dirname & filename
// console.log(__dirname); // useful to get current directory of our file
// console.log(__filename);

// -> doesn't work because we don't have document in the 'global' namespace, as opposed to the 'window' object in the browser
// console.log(document.querySelector)
