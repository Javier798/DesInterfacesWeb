 var numeros = [1,2,3,4,5,6];
 var numero=Math.random() * (numeros.length-1);

 document.getElementById("superior").style.backgroundImage ="url(./img/"+parseInt(numeros[numero])+".png)";
 numero
 numero=Math.random() * (numeros.length-1);
 document.getElementById("frente").style.backgroundImage ="url(./img/"+parseInt(numero)+".png)";
 document.getElementById("derecha").style.backgroundImage ="url(./img/"+parseInt(numero)+".png)";
 document.getElementById("izquierda").style.backgroundImage ="url(./img/"+parseInt(numero)+".png)";
 document.getElementById("atras").style.backgroundImage ="url(./img/"+parseInt(numero)+".png)";
 document.getElementById("inferior").style.backgroundImage ="url(./img/"+parseInt(numero)+".png)";