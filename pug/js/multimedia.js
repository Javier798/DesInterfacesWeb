function play() {
    var video = document.getElementById("video");
    video.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
    muestraAccion("play");
}
function pause() {
    document.getElementById("video").pause();
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
    muestraAccion("pause");
}
function volumen(item) {
    document.getElementById("video").volume = item.value / 100;

}
function stop() {
    document.getElementById("video").currentTime = 0;
    muestraAccion("stop");
}
function videoMostrado(item) {
    document.getElementById("video").currentTime = item.value;
    play();
}
window.onload = () => {
    mostrado.max = document.getElementById("video").duration;
}
let volumenAux;
function mute() {
    if (document.getElementById("video").volume != 0) {
        volumenAux = document.getElementById("video").volume;
        document.getElementById("video").volume = 0;
        document.getElementById("nomute").style.display = "block";
        document.getElementById("mute").style.display = "none";
        muestraAccion("mute");
    } else {
        document.getElementById("video").volume = volumenAux;
        document.getElementById("mute").style.display = "block";
        document.getElementById("nomute").style.display = "none";
        muestraAccion("noMute");
    }
}
setInterval(actualizaBarra, 500);
function actualizaBarra() {
    var item = document.getElementById("video");
    var muestraProgreso = document.getElementById("mostrado");
    muestraProgreso.value = item.currentTime;
}
let tiempo = 0;
var intervalo;
function muestraAccion(accion) {
    if(tiempo==2){
        clearInterval(intervalo);
        document.getElementById("playMostrar").style.opacity = "0";    
    }
    
    switch (accion) {
        case "play":
            document.getElementById("playMostrar").classList.add("mostrarScale");
            document.getElementById("pauseMostrar").classList.remove("mostrarScale");
            break;
        case "pause":
            document.getElementById("playMostrar").classList.remove("mostrarScale");
            document.getElementById("pauseMostrar").classList.add("mostrarScale");
            break;
        case "stop":
            document.getElementById("stopMostrar").classList.add("mostrarScale");
            setTimeout(() => {
                document.getElementById("stopMostrar").classList.remove("mostrarScale");
            }, 2000);
            break;
        case "avanzar":

            break;
        case "mute":
            document.getElementById("nomuteMostrar").classList.add("mostrarScale");
            document.getElementById("muteMostrar").classList.remove("mostrarScale");
            break;
        case "noMute":
            document.getElementById("muteMostrar").classList.add("mostrarScale");
            document.getElementById("nomuteMostrar").classList.remove("mostrarScale");
            break;
        default:
            break;
    }
}