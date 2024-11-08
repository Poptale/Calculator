//cursor code starts here
const dot = document.querySelector("[data-cursor-dot]");
const outline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", (e)=>{
    const posX = e.clientX;
    const posY = e.clientY;
    dot.style.top = `${posY}px`;
    dot.style.left = `${posX}px`;
    outline.animate({ top: `${posY}px`, left: `${posX}px`}, {duration: 200, fill:"forwards"});
});

//real code starts here
let clickSound = new Audio ("clickAudio.mp4");
let allButtons = document.querySelectorAll("button");


let numbers = "";
document.querySelector(".input-value").value = numbers;

function specialNumbers() {
let result = "";

    if (numbers.trim() === "") {
       result = "Nothing here type something";
    } else {
       switch(numbers.trim()){
        case "00":
            result = "Are you serious?";
            break;

        case "0":
            result = "That's zero";
            break;

        case "1":
            result = "That's one";
            break;

        case "2":
            result = "That's two";
            break;

        case "3":
            result = "That's three";
            break;

        case "4":
            result = "That's four";
            break;
        case "5":
            result = "That's five";
            break;     

        case "6":
            result = "That's six";
            break;

        case "7":
            result = "That's seven";
            break;

        case "8":
            result = "That's eight";
            break;

        case "9":
            result = "That's nine";
            break;

        case "10":
            result = "That's ten";
            break;

        default:
            try {
                result = eval(numbers);
            } catch(e) {
                result = "Error";
            }
            break;
       }
    }
    document.querySelector(".input-value").value = result;
}

function handleButtonClick(values) {
    numbers += values;
    document.querySelector(".input-value").value = numbers; 
};

let ChangeMode = document.querySelector(".mode-img");
let firstMode = "light";

ChangeMode.addEventListener("click", () => {
    if (firstMode === "light") {
            document.querySelectorAll(".number").forEach(btn => {
            btn.classList.remove("number");
            btn.classList.add("number2");
        });

        document.querySelectorAll(".special-buttons").forEach(btn => {
            btn.classList.remove("special-buttons");
            btn.classList.add("special-buttons2");
        });

        document.querySelector(".container").classList.add("container2");
        document.querySelector(".container").classList.remove("container");

        document.querySelector(".calculator-layout").classList.add("calculator-layout2");
        document.querySelector(".calculator-layout").classList.remove("calculator-layout");

        let inputElement = document.querySelector("input");
        inputElement.classList.add("input2");
        inputElement.classList.remove("input");

        document.querySelector(".mode-container").classList.add("mode-container2");
        document.querySelector(".mode-container").classList.remove("mode-container");

        document.querySelector(".mode-img").src = "brightness (1).png";
        document.querySelector("#svg").style.display = "inline";
        document.querySelector(".svg").style.display = "none";

        document.querySelector("h1").style.color = "rgb(200, 200, 200)";

        firstMode = "dark";
    } else {
        document.querySelectorAll(".number2").forEach(btn => {
            btn.classList.remove("number2");
            btn.classList.add("number");
        });

        document.querySelectorAll(".special-buttons2").forEach(btn => {
            btn.classList.remove("special-buttons2");
            btn.classList.add("special-buttons");
        });

        document.querySelector(".container2").classList.add("container");
        document.querySelector(".container2").classList.remove("container2");

        document.querySelector(".calculator-layout2").classList.add("calculator-layout");
        document.querySelector(".calculator-layout2").classList.remove("calculator-layout2");

        let inputElement = document.querySelector("input");
        inputElement.classList.add("input");
        inputElement.classList.remove("input2");

        document.querySelector(".mode-img").src = "brightness.png";
        document.querySelector(".svg").style.display = "inline";
        document.querySelector("#svg").style.display = "none";
        document.querySelector("h1").style.color = "black";

        document.querySelector(".mode-container2").classList.add("mode-container");
        document.querySelector(".mode-container2").classList.remove("mode-container2");

        firstMode = "light";
    }
});