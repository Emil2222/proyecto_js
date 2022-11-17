/* 
var valor =[ 500, 200, 290, 67]

let nombre = document.getElementsByTagName('h1').value; 

document.write (nombre)
var fondo =0
if(nombre="emiliano"){
 fondo = valor[0]
}else if(nombre ="mali"){
   fondo = valor[1]
  }else if(nombre ="bienvenido Gera"){
     fondo = valor[2]
    }else if(id="maui"){
       fondo = valor[3]
      } 
      
      traté de usar un solo js para todas as paginas pero no me salió y por eso hice un monton de archivos :c */


var valor =[ 500, 200, 290, 67]
fondo = valor[0]

function saldo (){
  document.write("<link rel='stylesheet' href='main.css'></link>")
document.write("<p id='fondo_actual'>Actualmente tiene: "+fondo+"</p> ¿Desea realizar otra transaccion?<br><br><br>")

document.write("<a href ='usuario.html'>si")

document.write("<a href ='salir.html'> no ")



}

function depositar() {
  
  var cantidad = document.getElementById("cantidad").value;
  var cantidad_numero = parseFloat(cantidad) //parseInt(cantidad)
  //fondo = fondo + cantidad


  fondo += cantidad_numero
  if(fondo >990){document.write("<link rel='stylesheet' href='main.css'></link>")
    document.write ("<h2>lo sentimos, no puede depositar esa cantidad<br>intentelo nuevamente</h2> <br><br> <a href ='usuario.html'> continuar")
  }else{document.write("<link rel='stylesheet' href='main.css'></link>")
  document.write ("<h2>deposito:  "+cantidad+"<h/2><br><br>")
  document.write ("<h2>Actualmente tienes:  "+fondo+"<h2><br><br>")

  document.write("<a href ='salir.html'> continuar ")
  }

}

function retirar() {
  
  var cantidad = document.getElementById("cantidad").value;
  var cantidad_numero = parseFloat(cantidad) //parseInt(cantidad)
  //fondo = fondo + cantidad
  
  fondo -= cantidad_numero
  if(fondo <10){document.write("<link rel='stylesheet' href='main.css'></link>")
    document.write ("<h2>lo sentimos, no puede depositar esa cantidad<br>intentelo nuevamente </h2><br><br> <a href ='usuario.html'> continuar")
  }else{document.write("<link rel='stylesheet' href='main.css'></link>")
  document.write ("<h2>retiro:  "+cantidad+"<h/2><br><br>")
  document.write ("<h2>Actualmente tienes:  "+fondo+"<h2><br><br>")

  document.write("<a href ='salir.html'> continuar ")
  
}

}

