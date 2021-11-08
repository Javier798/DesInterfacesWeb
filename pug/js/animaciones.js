function clickCuadrado(item) {    
    if(item.className=="animacion1"){
        item.className="animacion2";
    }else{
        item.className="animacion1";
        setTimeout(() => {
            item.className="animacion2";
        }, 6000);
    }    
}