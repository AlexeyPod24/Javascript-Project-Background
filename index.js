const colorChange = document.querySelector('#color');
const click = document.querySelector('#click');
const squares = document.querySelector('#squares');



const defaultBackground = 'lightgray';


// Set default background color and color name to uppger case when the page loads
document.body.style.backgroundColor =  defaultBackground;
colorChange.textContent = defaultBackground[0].toUpperCase() + defaultBackground.substring(1);
colorChange.style.color = defaultBackground;
click.style.backgroundColor = defaultBackground;

// Colors

const colors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];

click.addEventListener('click', function samecolor() {
  
  
    // Random Color Selector
 const ranColor = colors[Math.floor(Math.random() * colors.length)];  

//  If statement to ensure that some color does not repeat two times in a row.
// Statement reads if background color already displayed doesn't equal to the random color selected, then display
// that color. Do the same for color name and button background.

 if (document.body.style.backgroundColor != ranColor 
        && colorChange.style.color != ranColor 
            && click.style.backgroundColor != ranColor) {
    document.body.style.backgroundColor = ranColor; 
    colorChange.style.color = ranColor; 
    click.style.backgroundColor = ranColor;
    // If all the conditions above are met, also display the name of the random color selected with upper case first letter.
    colorChange.textContent = ranColor[0].toUpperCase() + ranColor.substr(1);
 } else  {
    samecolor()
 }
 


// Add a square with that color
const newSquare = document.createElement("div");
newSquare.style.backgroundColor = ranColor;
newSquare.className = "test";
squares.append(newSquare);

 
 
})



// ==================================================SOLUTION 2=======================================

// In this example, i am capitilizing every word in colors array first and then attaching styles.

// const colors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];

// let colorChange = document.querySelector('#color')

// let names = [];


// document.getElementById('click').addEventListener('click', function() {
    
//     for (let i=0; i < colors.length; i++) {
        
//         names[i] = colors[i][0].toUpperCase() + colors[i].substr(1)
//         // Why is it names[i] and not just names?
//     }
    
//     const ranColor = names[Math.floor(Math.random() * colors.length)]

//     document.body.style.backgroundColor = ranColor;
//     colorChange.textContent = ranColor;
    


// })















 
