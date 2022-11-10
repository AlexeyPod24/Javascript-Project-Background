const colorChange = document.querySelector('#color');
const click = document.querySelector('#click');
const squares = document.querySelector('#squares');





// Set defauls for when the page loads
const defaultBackground = 'lightgray';
document.body.style.backgroundColor =  defaultBackground;
colorChange.style.color = defaultBackground;
// click.style.backgroundColor = defaultBackground;

// Set the first letter of color name to be capitalized
colorChange.textContent = defaultBackground

const colors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];



click.addEventListener('click', function sameColor() {
  
  
 const filteredColors = colors.filter((value) => value !== document.body.style.backgroundColor);  
    // Random Color Selector
 const ranColor = filteredColors[Math.floor(Math.random() * filteredColors.length)];  

//  If statement to ensure that some color does not repeat two times in a row. The IF statement reads:
//  If current color is equal to random color, run the function again. 



//  if (currentColor === ranColor) {
//     sameColor();
//     return;
//  }

//  Set current color to random color.




// Change color name on click of button to current background name and captilize the
colorChange.textContent = ranColor
// colorChange.textContent = ranColor[0].toUpperCase() + ranColor.substr(1);

// Change the colors
document.body.style.backgroundColor = ranColor;
colorChange.style.color = ranColor;
// click.style.backgroundColor = ranColor;

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












 
