//Interaction

const interactionContainer = document.getElementById("interactionContainer");
const colorBtns = document.querySelectorAll(".colors");

for (let step = 0; step < colorBtns.length; step++) {
    colorBtns[step].addEventListener("click", function () {
        // console.log(getComputedStyle(colorBtns[step]));
        interactionContainer.style.backgroundColor = getComputedStyle(colorBtns[step]).backgroundColor;

    })
}

//Loop word

let word = "loop";

let loopcontainer = document.getElementById("loopContainer");
for (let step = 0; step < 10; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = word;
    loopcontainer.appendChild(textBox);
}


// Square

const square = document.getElementById("square");


square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
});

square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'lightsalmon';
});

// Text

const increase = document.getElementById("increaseText");

let size = 20;
function increaseFontSize() {

    if (size < 100) {
        size++;
        increase.style.fontSize = size + "px";
    }
}
setInterval(increaseFontSize, 1000);

//Text box

const inputText = document.getElementById("inputText");
const textLengthElement = document.getElementById("text-length");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    event.preventDefault();
    const textLength = inputText.value.length;
    textLengthElement.innerText = `Text Length: ${textLength}`;
});

console.log(" 3 Ingredient Mug Cake -- INGREDIENTS: ¼ cup Nutella, 2 tablespoon Flour AP, 1 Egg -- INSTRUCTIONS: 1. Into a microwave safe tall large mug, add the egg, flour, and Nutella. 2. Use a fork to mix the batter well until you get a smooth batter. 3.Place the mug in the microwave and microwave for 1 minute and 20 seconds.If the middle is raw, microwave for an additional 10 to 20 seconds until the cake is done. 4.Serve with more Nutella, powdered sugar, whipped cream, or by itself!")