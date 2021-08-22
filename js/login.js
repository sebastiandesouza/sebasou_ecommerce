//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function nocolor(){
 
    document.getElementById("usuario").classList.remove("error");
    document.getElementById("fallo").style.display = "none"; 
    document.getElementById("contraseña").classList.remove("error");
}

function color(){
    document.getElementById("usuario").classList.add("error");
    document.getElementById("fallo").style.display = "inline"; 
    document.getElementById("contraseña").classList.add("error"); 
}

function login(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if (usuario!="" && contraseña!=""){
            window.location.href='index.html';
    }else{
            color();
    }
  
}