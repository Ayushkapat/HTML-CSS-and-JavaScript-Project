// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "image/dice" + randomNumber1 + ".png";

//  var randomImageSource = "image/" + randomDiceImage;

//  var image1 = document.querySelectorAll("img") [0];

//  image1.setAttribute("src", randomImageSource);
// 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// 1. Use "images" (plural) to match your folder structure exactly
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; 

// 2. Select the first image element on the page
var image1 = document.querySelectorAll("img")[0];

// 3. Update the source attribute
image1.setAttribute("src", randomDiceImage);