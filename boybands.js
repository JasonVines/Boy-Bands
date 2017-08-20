"use strict";

console.log("boybands.js");


// // Boy Bands and Vegetables

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction", "test"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
let loopCount = 5;  // The number of loops to perform (what if the array changes?)
let currentBand = "";  // Keep track of which band we're on in the loop
let currentVeggie = "";  // Keep track of which veggie we're on in the loop
let bandElement = document.getElementById("boy-bands");  // Get a reference to the appropriate DOM element for bands
let veggieElement = document.getElementById("vegetables");  // Get a reference to the appropriate DOM element for vegetables

// Start looping
for (let loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  currentBand = bands[loopTracker];  // Add the band names into the correct <div>
  bandElement.innerHTML += "<li>" + currentBand + "</li>";
  console.log(currentBand);
  currentVeggie = vegetables[loopTracker];  // Add the veggie names into the correct <div>
  veggieElement.innerHTML += "<li>" + currentVeggie + "</li>";
  console.log(currentVeggie);
}