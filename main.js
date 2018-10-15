// Make a basic index.html page with an h1 tag that says "My Favorite Snack" and an p tag that contains the string "Spicy Nacho Cheese Doritos and an icy cold Coca-Cola"

// Create a main.js file and add it to your HTML file with a script tag

// Create a styles.css file and include it in your HTML file with a link tag

// Add this to styles.css



//grabs element and returns//
// let targetElement = document.querySelector("h1")


//adds class to selected element//
// targetElement.classList.add("class", "urgent");


//grabs all//
// const sectionEls = document.querySelectorAll(".article_section")

//grabs one
// const sectionFooterEls = document.querySelectorAll(".article__footer");
// console.log('footer', sectionFooterEls)

// Use JavaScript to:
// const sectionHighlight = document.querySelectorAll(".article__section");
// console.log(sectionHighlight)

const sectionHighlight = document.querySelectorAll(".article__section");
console.log('body',sectionHighlight)

let highlightElement = sectionHighlight[1]
sectionHighlight.classList.add("highlight")


// add a class of highlight to the second article__section





