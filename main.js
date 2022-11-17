
var nombres =["Emiliano", "Mali", "Gera", "Maui"]



function ingresar () {
        var nip = document.getElementById("nip").value; 
        
    if(nip=="1234"){
       document.write("<link rel='stylesheet' href='main.css'></link>")
       document.write("<h1> bienvenido "+nombres[0]+"</h1><br><br><a href ='usuario.html'>Continuar</a>") 
    }else if(nip =="5678"){
        document.write("<link rel='stylesheet' href='main.css'></link>")
        document.write("<h1> bienvenido "+nombres[1]+"</h1><br><br><a href ='mali.html'>Continuar</a>") 
    }else if(nip =="9182"){
        document.write("<link rel='stylesheet' href='main.css'></link>")
        document.write("<h1> bienvenido "+nombres[2]+"</h1><br><br><a href ='gera.html'>Continuar</a>") 
    }else if(nip =="3847"){
        document.write("<link rel='stylesheet' href='main.css'></link>")
        document.write("<h1> bienvenido "+nombres[3]+"</h1><br><br><a href ='maui.html'>Continuar</a>")  
    }
    else{
        document.write("<link rel='stylesheet' href='main.css'></link>")
        document.write("<h1>NIP incorrecto, intente de nuevo por favor </h1><br><br><a href ='main.html'>Continuar</a> ")

    }
}