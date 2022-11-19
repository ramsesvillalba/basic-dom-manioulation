const h1 = document.querySelector('h1');
const form =document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const h2Result = document.querySelector('#resultH2');

btn.addEventListener('click',btnSubmit);

function btnSubmit(){
    // event.preventDefault(); se usa para detener el evento predeterminado del boton submit del formulario que hacia enviar lo datos del form a la URL por lo que la pagina se recargaba y mostraba el resultado solo por una milesima de segundo
    const result = +input1.value +  +input2.value;
    h2Result.innerText = 'Resultado= ' + result;
}

//con la funcion y evento de abajo podemos mostrar una alerta con un mensaje que dice que el texto fue copiado
h2Result.addEventListener('copy',copiedText)

function copiedText(){
    alert ('Copied text!');
}

