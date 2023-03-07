var counters = 1;
var imagenes = [];

cargarimagenes();

async function cargarimagenes(){
const key="34023034-f6bfd61f4a2235bdb53f13a37";
const url="https://pixabay.com/api/?key="+key+"&q="+encodeURIComponent('landscapes');

const respuesta=await fetch(url);
const resultado=await respuesta.json();
imagenes=resultado.hits;

let temporizador=setInterval(() =>{
    console.log(imagenes);
    
    var imagen = document.getElementById("Fondo_Izq");
     
    imagen.src = imagenes[counters].largeImageURL;
    imagen.classList.remove("IMG_IZQ"); 
     void imagen.offsetWidth; 
    imagen.classList.add("IMG_IZQ");
       
    
    counters++; 
    if(counters === 20){
     clearInterval(temporizador);
    };


 },8000);

};

