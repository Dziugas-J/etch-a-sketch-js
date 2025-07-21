const container = document.querySelector(".container");
const inputButton = document.querySelector(".button");
let opacity = 0;

window.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

inputButton.addEventListener('click', () => {
    const userInput = prompt("How many squares per side should the grid have? (1-100)");
    const n = parseInt(userInput);
    if (!isNaN(n) && n >= 1 && n <= 100) {
        document.querySelectorAll(".square").forEach(el => el.remove());
        value = 1;
        opacity = 0;
        createGrid(n);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

function createGrid(n){
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    for (let i = 0; i < n*n; i++){
        const div = document.createElement("div");
        div.className = "square"
        div.onmouseover = function(){
            div.style.backgroundColor = getRandomColor();
        };
        container.appendChild(div);
    }
}
let value = 1;
function getRandomColor(){
    opacity++;
    if (opacity <= 1000){
        let colors = [
            reduceColor(209, 233, 246), 
            reduceColor(246, 234, 203), 
            reduceColor(241, 211, 206), 
            reduceColor(238, 202, 213), 
            reduceColor(197, 239, 202)
        ];
        value -= 0.001; 
        console.log(value);
        return colors[Math.floor(Math.random() * colors.length)];
    }
    else{
        return "rgb(0,0,0)";
    }
}
function reduceColor(r,g,b){
    return `rgb(${Math.round(r*value)},${Math.round(g*value)},${Math.round(b*value)})`;
}