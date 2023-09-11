var reconocedorVoz = window.webkitSpeechRecognition;
var reconocedor = new reconocedorVoz();
var Textbox = document.getElementById("textbox");

function start(){
    document.getElementById("microfono").src="speak.gif";
    document.getElementById("textbox").innerHTML = "";
    reconocedor.start();
    setTimeout(function(){
        document.getElementById("microfono").src="mic.png";
    })
}