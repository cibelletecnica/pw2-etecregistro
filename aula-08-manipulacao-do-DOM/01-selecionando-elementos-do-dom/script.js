// JAVASCRIPT

// SELECIONANDO UM ELEMENTO PELA TAG

// p = parágrafo 
// 0 = número do elemento que queremos capturar, no caso o primeiro elemento da página

const p0 = document.window.document.getElementsByTagName('p')[0];
// ALTERANDO AS CARACTERÍSTICAS DO ELEMENTO
p0.style.color = 'yellow';
p0.innerText = "Mudei o texto C:";

const p1 = document.getElementsByTagName('p')[1];
p1.style.color = 'black';

// CAPTURANDO O CORPO DO SITE
const corpoSite = window.document.body;

// MUDANDO SUA COR
corpoSite.style.background = "#2F2F2F"

// ACESSANDO O CONTEÚDO DE UM ELEMENTO DOM
document.write(`<br>No 2º parágrafo do site está escrito assim: ${p1.innerText}`);