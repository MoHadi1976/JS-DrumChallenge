document.addEventListener("keypress",(event) =>{
    playsound(event.key);
});

function playsound(text){
    switch(text){
        case "a":
            let audio1 = new Audio('Sounds/boom.wav');
            audio1.play();
            break;
            case "s":
            let audio2 = new Audio('Sounds/clap.wav');
            audio2.play();
            break;
            case "d":
            let audio3 = new Audio('Sounds/hihat.wav');
            audio3.play();
            break;
            case "f":
            let audio4 = new Audio('Sounds/kick.wav');
            audio4.play();
            break;
            case "g":
            let audio5 = new Audio('Sounds/openhat.wav');
            audio5.play();
            break;
            case "h":
            let audio6 = new Audio('Sounds/ride.wav');
            audio6.play();
            break;
            case "j":
            let audio7 = new Audio('Sounds/snare.wav');
            audio7.play();
            break;
            case "k":
            let audio8 = new Audio('Sounds/tink.wav');
            audio8.play();
            break;
            case "l":
            let audio9 = new Audio('Sounds/tom.wav');
            audio9.play();
            break;
            default:
                alert("Invalid Key")
    }
}