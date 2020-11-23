const clickBtn = document.querySelector("#btn");
const paraGraph = document.querySelector("#lorem");
const content = document.querySelector(".container");
const title = document.querySelector(".heading");
const newPg = document.querySelector(".demo");

clickBtn.addEventListener("mouseout", changeText);

function changeText() {
    title.style.color = "purple";
}

clickBtn.addEventListener("click", changeColor);

function changeColor() {
    paraGraph.style.color = "red";
    paraGraph.style.background = "yellow";
    content.style.background = "blue";
}

clickBtn.addEventListener("mouseover", displayDate);

function displayDate() {
    newPg.innerHTML = Date();
}