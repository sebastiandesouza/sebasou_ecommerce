//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

//Borra el mensaje de error de los inputs
function nocolor(){
   document.getElementById("usuario").classList.remove("error");
    document.getElementById("fallo").style.display = "none"; 
    document.getElementById("contraseña").classList.remove("error");
}
//agrega un mensaje de error en los inputs
function color(){
    document.getElementById("usuario").classList.add("error");
    document.getElementById("fallo").style.display = "inline"; 
    document.getElementById("contraseña").classList.add("error"); 
}
//guarda los datos ingresados
function guardarDatos() {
    sessionStorage.nombre = document.getElementById("usuario").value;
    sessionStorage.password = document.getElementById("contraseña").value;
}
// si usuario y contraseña correctos abre index.hmtl sino error
function login(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if (usuario!="" && contraseña!=""){
          // guardar datos
          guardarDatos()
            window.location.href='index.html';
    }else{
            color();
    }
  
}