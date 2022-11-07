const defaultBackground = 'lightgray';
let colorChange = document.querySelector('#color');
const click = document.querySelector('#click');

// Set default background color and color name to uppger case when thepage loads
document.body.style.backgroundColor =  defaultBackground;
colorChange.textContent = defaultBackground[0].toUpperCase() + defaultBackground.substring(1);



const colors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];

click.addEventListener('click', function() {
    // Random Color Selector
 const ranColor = colors[Math.floor(Math.random() * colors.length)]  

// Change background color, button background color, and color name to Random Color that is being displayed.
 document.body.style.backgroundColor = ranColor;
 click.style.backgroundColor = ranColor;
 colorChange.style.color = ranColor;

 colorChange.textContent = ranColor[0].toUpperCase() + ranColor.substr(1);

 

 


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















 
