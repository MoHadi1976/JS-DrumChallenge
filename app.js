const buttonA = document.getElementById("buttonA")
const buttonS = document.getElementById("buttonS")
const buttonD = document.getElementById("buttonD")
const buttonF = document.getElementById("buttonF")
const buttonG = document.getElementById("buttonG")
const buttonH = document.getElementById("buttonH")
const buttonJ = document.getElementById("buttonJ")
const buttonK = document.getElementById("buttonK")
const buttonL = document.getElementById("buttonL")



const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");





buttonA.addEventListener("click", () => {
    audio1.currentTime = 0;
    audio1.play();
})
buttonS.addEventListener("click", () => {
    audio2.currentTime = 0;
    audio2.play();
})
buttonD.addEventListener("click", () => {
    audio3.currentTime = 0;
    audio3.play();
})
buttonF.addEventListener("click", () => {
    audio4.currentTime = 0;
    audio4.play();
})
buttonG.addEventListener("click", () => {
    audio5.currentTime = 0;
    audio5.play();
})
buttonH.addEventListener("click", () => {
    audio6.currentTime = 0;
    audio6.play();
})
buttonJ.addEventListener("click", () => {
    audio7.currentTime = 0;
    audio7.play();
})
buttonK.addEventListener("click", () => {
    audio8.currentTime = 0;
    audio8.play();
})
buttonL.addEventListener("click", () => {
    audio9.currentTime = 0;
    audio9.play();
})


document.addEventListener("keypress", function(event){
    playsound(event.key);
});

function playsound(text) {
    switch(text){
        case "a":
            audio1.currentTime = 0;
            audio1.play();
            break;
            case "s":    
            audio2.currentTime = 0;
            audio2.play();
            break;
            case "d":    
            audio3.currentTime = 0;
            audio3.play();
            break;
            case "f":
            audio4.currentTime = 0;
            audio4.play();
            break;
            case "g":
            audio5.currentTime = 0;
            audio5.play();
            break;
            case "h":
            audio6.currentTime = 0;
            audio6.play();
            break;
            case "j":
            audio7.currentTime = 0;
            audio7.play();
            break;
            case "k":
            audio8.currentTime = 0;
            audio8.play();
            break;
            case "l":
            audio9.currentTime = 0;
            audio9.play();
            break;
            default:
                alert("Invalid Key")
    }
};