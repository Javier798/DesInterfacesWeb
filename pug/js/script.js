window.onload= function (){
    let hamburguesa = document.getElementById("hamburguesa");
    hamburguesa.addEventListener("click",()=>{
        let menuHamburguesa = document.getElementById("menuHamburguesa");
        menuHamburguesa.classList.toggle("mostrarMenu");
    });
}