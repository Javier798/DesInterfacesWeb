function play() {
    var video = document.getElementById("video");
    video.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
    muestraAccion(document.getElementById("playMostrar"));
}
function pause() {
    document.getElementById("video").pause();
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
    muestraAccion(document.getElementById("pauseMostrar"));
}
function volumen(item) {
    document.getElementById("video").volume = item.value / 100;

}
function stop() {
    document.getElementById("video").currentTime = 0;
    muestraAccion(document.getElementById("stopMostrar"));
}
function videoMostrado(item) {
    document.getElementById("video").currentTime = item.value;
    document.getElementById("avance").innerHTML = parseInt(document.getElementById("video").currentTime/60)+":"+document.getElementById("video").currentTime%60;
    muestraAccionVideo(document.getElementById("avance"));
    
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
        muestraAccion(document.getElementById("nomuteMostrar"));
    } else {
        document.getElementById("video").volume = volumenAux;
        document.getElementById("mute").style.display = "block";
        document.getElementById("nomute").style.display = "none";
        muestraAccion(document.getElementById("muteMostrar"));
    }
}
setInterval(actualizaBarra, 500);
function actualizaBarra() {
    var item = document.getElementById("video");
    var muestraProgreso = document.getElementById("mostrado");
    muestraProgreso.value = item.currentTime;
}
function muestraAccionVideo(item) {
    item.style.opacity="1";
    item.style.transform="scale(10,10)";
    setTimeout(() => {
        item.style.transform="scale(1,1)";
        item.style.opacity="0";
    }, 2000);
}
function muestraAccion(item) {
    item.classList.add("mostrarScale");
    setTimeout(() => {
        item.classList.remove("mostrarScale");
    }, 2000);
}