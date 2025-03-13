let nod;
let pass;
let str = "Vq5-}{Yu><@3Fg#LkE.DGh0;McB2Ow!T[pN^4Hi*aKmPzWs%rSU1ZAn,]|&IJ/7'_(jCl8tRbQdX";

function addInput_ChangeSliderValue() {
    let finalPass = "";           //Isse Next time jab generate pe click karenge to purana paasword will be removed.
    let passwordLength = slider.value;

    for (let i = 1; i <= passwordLength; i++) {
        let a = Math.random();
        let b = Math.floor(a * str.length);
        finalPass += str[b];
    }

    output.textContent = finalPass; // Used textContent instead of innerText as it's slighlty faster

    setTimeout(() => {
        generate.disabled = false; // This will disable the button till the password is generated(Page Refresh issue nahi hoga).
    }, 300);
}

let output = document.getElementById("output");
let generate = document.getElementById("generate");

let slider = document.getElementById("slider");
let sliderValueDisplay = document.getElementById("SliderValue");
sliderValueDisplay.innerText = "Password Length = " + slider.value;


generate.addEventListener("click", addInput_ChangeSliderValue);

slider.addEventListener("input", () => {
    sliderValueDisplay.innerText = "Password Length = " + slider.value
})

let upperCase = document.createElement("button")

let copyBtn = document.getElementById("copy")

copyBtn.addEventListener("click", copyPassword);

let copiedPassword;

function copyPassword() {
    if (output.textContent) {     // Again Used textContent instead of innerText as it's slighlty faster
        navigator.clipboard.writeText(output.textContent);
        copyBtn.style.backgroundColor = "green";
        output.style.backgroundColor = "#21de8e"
        
        setTimeout(()=> {
            copyBtn.style.backgroundColor = "black";
            output.style.backgroundColor = "white"
        },300)

        console.log("Password Copied");
    } else {
        alert("Please generate a password");
        return;
    }
}


