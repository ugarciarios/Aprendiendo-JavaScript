//Alertas
alert("Hola soy Uriel Garcia");

//variables
let nombre = "Uriel";
let apellido = "Garcia";

//Constantes
let edad = 34;

//Mostrar por consola
console.log(nombre);
console.log(edad);

//Concatenacion
let concatenacion = nombre + " " + apellido;

//Seleccionar elementos del dom
let datos = document.querySelector("#datos");  //document: acceder al documento html, querySelector: para seleccionar una de las etiquetas o elementos de la pagina
datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>
    <h3>Mi edad es: ${edad}</h3>
`;                                             //Template string datos.innerHtml: enlace entre los datos y el template string

//Condiciones
edad = 34;

if(edad <= 18){
    datos.innerHTML += "<h2>Eres menor de edad</h2>"
}else if(edad > 18 && edad < 65){
    datos.innerHTML += "<h2>Eres un adulto</h2>"
}else if (edad > 65 ){
    datos.innerHTML += "<h2>Eres un adulto mayor</h2>"
}

//Bucles
//for(inicializador; condicion; modificador)

for(let year = 2000; year <= 2024; year++){
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}

// Arrays
let nombres = ["Victor", "Francisco", "Pepe"]
let divNombres = document.querySelector("#nombres");

//Formas de llamar una lista de nombres

//divNombres.innerHTML = nombres[2] //inner.HTML: selector  //Forma 1


/*divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";  //Forma 2

nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>"+nombre+"</li>";
});*/

for (let nombre of nombres) {                               //Forma 3
    divNombres.innerHTML += "<li>"+nombre+"</li>";
};

divNombres.innerHTML += "</ul>"

//Funciones
const miInformacion = (nombre, edad) => {
    let misDatos = `
        <hr/>
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi edad es: ${edad} años</h3>
    `;                 

    return misDatos;
}

const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion ("Uri", 34);
}

imprimir();
imprimir();
imprimir();
