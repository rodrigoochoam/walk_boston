import { renderTopSalaries, renderTopEmployees, renderBoston } from "./module.js";

// Assuming you have defined the 'boston' object somewhere in your code
import { boston } from "./boston.js";

// Make sure the 'container' element is present in the DOM before trying to access it
const containerSalaries = document.getElementById('containerSalaries');
const containerEmployees = document.getElementById('containerEmployees');
const containerAll = document.getElementById('containerAll');


// Call the functions to render the data
renderTopSalaries(boston, containerSalaries);
renderTopEmployees(boston, containerEmployees);
renderBoston(boston, containerAll);
