let name = "Z";
let size = 10;
let letter = "h";
let colorPalette = ["red", "green", "blue", "purple", "orange"];

//console.log(colorPalette[0]);

//change text variables
for (let step = 0; step < 100; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = "Ah" + letter;

    // if (step < 59) {
    //     textBox.innerHTML = "hola";
    // } else {
    //     textBox.innerHTML = "Bye";
    // }

    textBox.style.fontSize = size + "px";
    textBox.style.color = colorPalette[step % colorPalette.length];
    document.body.appendChild(textBox);
    size++;
    letter += "h";
}

//click button to change bg colour
document.querySelector("button").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    console.log("clicked on button");
    //alert("Hi!");//
})

let texts = document.querySelectorAll("p");

for (let step = 0; step < texts.length; step++) {
    texts[step].addEventListener("click", function () {
        console.log(this.innerHTML.length);
        this.innerHTML = this.innerHTML.length;

    })
}



// console.log(texts[1]);