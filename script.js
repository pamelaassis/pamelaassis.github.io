//Variáveis utilizadas
const modal = document.getElementsByClassName('modal-body')[0];
const modalBtn = document.getElementById('modal-btn');
const modalClose = document.getElementsByClassName('btn-close')[0];
const btnLimpar = document.getElementById('btn-limpar');
const nome = document.getElementById('floatingNome');
const sobrenome = document.getElementById('floatingSobrenome');
const email = document.getElementById('floatingEmail');
const assunto = document.getElementById('floatingAssunto');
const mensagem = document.getElementById('floatingMensagem');
const showCount = document.getElementById('counter');
const btnEnviar = document.querySelector('button');
let count = 300;

//Função que gera os elementos para montar as informações que aparecem no Modal
function geraElemento(elemento) {
    const novoElemento = document.createElement('p');
    if(elemento !== nome && elemento !== sobrenome) {
        novoElemento.innerText = `${elemento.name}: ${elemento.value}`;
    }else{
        novoElemento.innerText = `Nome completo: ${nome.value} ${sobrenome.value}`;
    }
   
    modal.appendChild(novoElemento);
}

//Função que limpa o form ao enviar
function limpaForm () {
    nome.value = "";
    sobrenome.value = "";
    email.value = "";
    assunto.value = "";
    mensagem.value = "";
}

//Função utilizada para "resetar" a contagem de caracteres do textarea(mensagem) nos botões do form.
function resetaCaracteres() {
    showCount.innerText = 'Caracteres: 300';
}

//Gera o Modal com as informações preenchidas no form de contato e limpa o form.
function geraModal() {
    geraElemento(nome);
    geraElemento(email);
    geraElemento(assunto);
    geraElemento(mensagem);
    limpaForm();
    resetaCaracteres();
}

//Função que remove o conteúdo do modal ao fechá-lo para o caso de enviar outro form em seguida(Não irá duplicado).
function limparModal() {
    let child = modal.lastElementChild; 
    while (child) {
        modal.removeChild(child);
        child = modal.lastElementChild;
    }
}

// Função que controla a contagem de carateres do textarea (Mensagem no form de contato)
function contaCaracteres() {
    count = 300 - mensagem.value.length;
    showCount.innerText = `Caracteres: ${count}`;
}

// Elementos possuem eventos que "esperam" determinada ação do usuário
mensagem.addEventListener('keyup', contaCaracteres)
btnEnviar.addEventListener('click', geraModal);
modalClose.addEventListener('click', limparModal);
modalBtn.addEventListener('click', limparModal);
btnLimpar.addEventListener('click', resetaCaracteres);


