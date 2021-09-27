var category = {};
var coments = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function commentBox(){

	var name=document.getElementById('name').value;

	var comment=document.getElementById('comment').value;

 

	if(name =="" || comment ==""){

		alert("Porfavor introduce la informacion requerida!");

	}else{
        var hoy = new Date();
        var fecha = hoy.getFullYear()  + "-"+ (hoy.getMonth()+ 1)+"-"+ hoy.getDate();
        var hora = hoy.getHours() + ":"+ hoy.getMinutes() + ":"+ hoy.getSeconds();
        var fechaYHora = fecha +" " + hora;
    

	let s = "";

    s +=` <div class="col-lg-3 col-md-4 col-6">
    <div class="d-block mb-4 h-100, caja">
        <p>` + name + `</p>
        <p> `+ stars(contador) + `</p>
         <p> `+ comment + `</p>
         <p> `+ fechaYHora + `</p>
       
     
      
       
       
    </div>
</div>
`


 document.getElementById("uscoment2").innerHTML += s;
 

}}

function stars(array){
    let p = "";
    for(let o = 0;o < array; o++){
        p+=`
        <span class="fa fa-star checked"></span>
        `
    }
 return p;
}
    function star(array){
        let p = "";
        for(let o = 0;o < array.score; o++){
            p+=`
            <span class="fa fa-star checked"></span>
            `
        }
     return p;
    }

    var contador;
function calificar(item){
   
    console.log(item);
contador=item.id[0];
let nombre = item.id.substring(1);

for (let i=0; i<5; i++){
    if(i<contador){
        document.getElementById((i+1)+nombre).style.color="orange";
    }else{
        document.getElementById((i+1)+nombre).style.color="black";
    }


}
   
}



function showcoments(){
    let htmlContentToAppend = "";
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            coments = resultObj.data;
            for(let i = 0; i < coments.length; i++){
                let usercoments= coments[i];
                htmlContentToAppend += `
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-block mb-4 h-100, caja">
                        <p>` + usercoments.user + `</p>
                        <p> `+ star(usercoments) + `</p>
                        <p> `+ usercoments.description + `</p>
                        <p>` + usercoments.dateTime + `</p>
                       
                    </div>
                </div>
                `
        
                document.getElementById("uscoment").innerHTML = htmlContentToAppend;
            
                }
          

        }
    });

        
        
   
    
           
        }
    

 
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.cost + category.currency;
            productCriteriaHTML.innerHTML = category.soldCount;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
            showcoments()
        }
    });

});