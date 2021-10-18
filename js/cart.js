var category = {};





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;
            for(let i = 0; i < category.articles.length; i++){            
            let producto= category.articles[i];
           let canti=producto.count;
           
            document.getElementById("cant").addEventListener("click", function(e) {
                canti = this.value;
                let subtotalhtml = document.getElementById("subtotal");
                let totalHTML = document.getElementById("total");
                 
                  let subtotal = parseInt(producto.unitCost)*parseInt(canti);
                        let  total = parseInt(producto.unitCost)*parseInt(canti);
                 
                        subtotalhtml.innerHTML = subtotal;
                        totalHTML.innerHTML = total;
            });
            
            let subtotalhtml = document.getElementById("subtotal");
            let totalHTML = document.getElementById("total");
             
              let subtotal = parseInt(producto.unitCost)*parseInt(canti);
                    let  total = parseInt(producto.unitCost)*parseInt(canti);
             
                    subtotalhtml.innerHTML = subtotal;
                    totalHTML.innerHTML = total;
          
           
            let mostra="";
                    mostra += `
                    <div class="col-lg-3 col-md-4 col-6">
                        <div class="d-block mb-4 h-100">
                            <h2 class="my-0">` + producto.name + `</h2>
                            <img class="img-fluid img-thumbnail" src="` +  producto.src + `" alt="">
                          <hr>
                          <h5 class="my-0">Precio: ` + producto.unitCost +` `+ producto.currency + `</h5>
                          <hr>
                          
      <hr>
                        </div>
                    </div> `;
            
                    document.getElementById("carrito").innerHTML = mostra;
                  
              
            }
           
        
    }
   
    });
     
});