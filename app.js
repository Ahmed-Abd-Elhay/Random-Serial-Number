let serialNumber = document.querySelector(".serial");

let genButton = document.querySelector(".generat");


let litterNumber = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

genButton.onclick = function () {
    let count = 16;
    let random = "";
    for (let i = 0; i < count; i++) {
        random += litterNumber[Math.floor(Math.random() * litterNumber.length)];
    };
    serialNumber.innerHTML = random;
};