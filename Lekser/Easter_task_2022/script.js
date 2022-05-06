let h1EL = document.querySelector('h1');
let bgEL = document.querySelector('main');
let x = 0;
// let listNumber = [-50, -40, -30, -20, -10, 10, 20, 30, 40, 50];


function incrementFunction() {
    x++;
    h1EL.textContent = x;
    if (x === Math.floor(x / 10) * 10){
        getRandomColor()
    }   
}

function decrementFunction() {
    x--;
    h1EL.textContent = x;
    if (x === Math.floor(x / 10) * 10){
        getRandomColor()
    } 
    
}

function getRandomColor() {
    let bgcolor = "#";
        bgcolor += Math.random().toString(16).slice(2, 8);
        bgEL.style.backgroundColor = bgcolor;
}



// function roundDownToClosest10(num) {
//     return Math.floor(num / 10) * 10;
//   }