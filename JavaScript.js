const VIOLIN = 0;
const FLUTE = 1;
const UKULELE = 2;
const TROMBONE = 3;
const TRUMPET = 4;


var stringvio = new Audio ("Sounds/violin.mp3"); 
var windflu = new Audio("Sounds/flute.wav");
var stringlele = new Audio("Sounds/ukulele.mp3");
var brassbone = new Audio("Sounds/trombone.mp3");
var brasstrump = new Audio("Sounds/trumpet.mp3");


var sounds = [stringvio, windflu, stringlele, brassbone, brasstrump];

function buttonPress(Instruments) {
    sounds[Instruments].play(Instruments);
}