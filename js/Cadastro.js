//variaveis

let btn = document.querySelector('#verSenha')
let btnConf = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let lblNome = document.querySelector('#lblNome')

//let tel = document.querySelector('#tel')
//let lblTel = document.querySelector('#lblTel')

//let usuario = document.querySelector('#usuario')
//let lblUser = document.querySelector('#lblUser')

let senha = document.querySelector('#senha')
let lblSenha = document.querySelector('#lblSenha')

let confirmsenha = document.querySelector('#confirmsenha')
let lblConf = document.querySelector('#lblConf')

//eventos e funções

//Validar campos 
nome.addEventListener('keyup', () => {
    if(nome.value.length < 3){ //Se valor incorreto ao padrão
        lblNome.setAttribute('style','color: red')
        lblNome.innerHTML = 'Nome <strong> *Insira no mínimo 3 caracteres </strong>'
    } else{
        lblNome.setAttribute('style','color: #adadad')
        lblNome.innerHTML = 'Nome'
    }   
})

senha.addEventListener('keyup', () => {

    if(senha.value.length < 3){ //Se valor incorreto ao padrão
        lblSenha.setAttribute('style','color: red')
        lblSenha.innerHTML = 'Senha <strong> *Insira no mínimo 3 caracteres </strong>'
    } else{
        lblSenha.setAttribute('style','color: #adadad')
        lblSenha.innerHTML = 'Senha'
    }   
})

confirmsenha.addEventListener('keyup', () => {

    if(confirmsenha.value != senha.value ){ //Se valor incorreto ao padrão
        lblConf.setAttribute('style','color: red')
        lblConf.innerHTML = 'Confirmar Senha <strong> *As senhas não conferem </strong>'
    } else{
        lblConf.setAttribute('style','color: #adadad')
        lblConf.innerHTML = 'Confirmar Senha'
    }   
})



//Mostrar e ocultar senha
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

btnConf.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confirmsenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

//CEP buscando endereço automáticamente
function buscaCep(){
    let cepbusca = document.getElementById('cep').value;
    if(cepbusca != ""){ //Se Cep diferente de vazio
        let url = "https://brasilapi.com.br/api/cep/v1/" + cepbusca;
        
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function() {
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("cidade").value = endereco.city;
                document.getElementById("estado").value = endereco.state;
                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
            }
            else if (req.status === 404) {
                alert("CEP inválido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function(){
    let cep = document.getElementById( "cep" );
    cep.addEventListener("blur", buscaCep);
}



//Função do botão Cadastrar
function cadastrar(){

}