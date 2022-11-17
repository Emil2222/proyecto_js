var valor =[ 500, 200, 290, 67]
fondo = valor[3]


function saldo (){
  document.write("<link rel='stylesheet' href='main.css'></link>")
document.write("<p id='fondo_actual'>Actualmente tiene: "+fondo+"</p> ¿Desea realizar otra transaccion?<br><br><br>")

document.write("<a href ='maui.html'>si")

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