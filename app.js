let nod;
let pass;
let str="Vq5-}{Yu><@3Fg#LkE.DGh0;McB2Ow!T[pN^4Hi*aKmPzWs%rSU1ZAn,]|&IJ/7'_(jCl8tRbQdX";

function addInput_ChangeSliderValue() {
    let finalPass="";           //Isse Next time jab generate pe click karenge to purana paasword will be removed.
    let passwordLength = slider.value;

    for(let i=1;i<=passwordLength;i++) {
        let a=Math.random();
        let b=Math.floor(a*str.length);
        finalPass+=str[b];
        }

    output.innerText = finalPass;

    setTimeout(() => {
        generate.disabled = false; // This will disable the button till the password is generated(Page Refresh issue nahi hoga).
    }, 300);
}

let output = document.querySelector("#output");
let generate = document.querySelector("button");

let slider = document.querySelector("#slider");
let sliderValueDisplay = document.querySelector("#SliderValue");
sliderValueDisplay.innerText = "Password Length = " + slider.value;


generate.addEventListener("click",addInput_ChangeSliderValue);

slider.addEventListener("input", () => {
    sliderValueDisplay.innerText = "Password Length = " + slider.value
})



