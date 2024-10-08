let nod;
let pass;
let finalPass="";
let str="Vq5-}{Yu><@3Fg#LkE.DGh0;McB2Ow!T\[pN^4Hi*aKmPzWs%rSU1ZAn,]|&IJ/7'_(jCl8tRbQdX";
nod=20;

function addInput() {
    let finalPass="";           //Isse Next time jab generate pe click karenge to purana paasword will be removed.
    for(let i=1;i<=nod;i++) {
    let a=Math.random();
    let b=Math.floor(a*str.length);
    finalPass+=str[b];
    output.innerText = finalPass;
}
    
}

let output = document.querySelector("#output");
let generate = document.querySelector("button");
generate.addEventListener("click",addInput);

console.dir(output);