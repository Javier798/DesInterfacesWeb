window.onload = () => {
    document.getElementById("enviar").addEventListener("click", (event) => {
        var inputs = document.querySelectorAll("input");
        var chido = true;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "") {
                chido = false;
            }
        }
        if (chido) {
            document.querySelector(".loader").classList.add("loaderCarga");
            setTimeout(() => {
                document.querySelector(".loader").classList.remove("loaderCarga");
                document.querySelector("form").classList.add("moverForm");
            }, 3000);
            event.stopPropagation();
            event.preventDefault();
        }
    });
}