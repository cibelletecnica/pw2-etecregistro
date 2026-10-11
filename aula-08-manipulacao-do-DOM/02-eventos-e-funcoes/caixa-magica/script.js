// JAVASCRIPT

const caixaMagica = document.getElementById('caixaMagica');

// "Escutando" os eventos realizados com o elemento da DOM
caixaMagica.addEventListener('mouseenter', entradaMouse) 
caixaMagica.addEventListener('mouseleave', saidaMouse) 
caixaMagica.addEventListener('click', clicarMouse) 

//Criando uma função 
function entradaMouse() {
    caixaMagica.innerText = "Olá, Diego! ;)";
    caixaMagica.style.backgroundColor = "blue";
}

function saidaMouse() {
    caixaMagica.innerText = "Tchau, até breve! ;(";
    caixaMagica.style.backgroundColor = "red";
}

function clicarMouse() {
    caixaMagica.innerText = "Interaja com a caixa!";
    caixaMagica.style.backgroundColor = "purple";
}