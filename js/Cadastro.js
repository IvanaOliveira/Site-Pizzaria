//variaveis

let btn = document.querySelector('#verSenha')
let btnConf = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let lblNome = document.querySelector('#lblNome')
let validNome = false

let nasc = document.querySelector('#nasc')
let lblNasc = document.querySelector('#lblNasc')
let validNasc = false

let tel = document.querySelector('#tel')
let lblTel = document.querySelector('#lblTel')
let validTel = false

let usuario = document.querySelector('#usuario')
let lblUser = document.querySelector('#lblUser')
let validUser = false

let senha = document.querySelector('#senha')
let lblSenha = document.querySelector('#lblSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let lblConf = document.querySelector('#lblConf')
let validConf = false

let cep = document.querySelector('#cep')
let lblCep = document.querySelector('#lblCep')
let validCep = false

let city = document.querySelector('#cidade')
let lblCity = document.querySelector('#lblCidade')
let validCity = false

let estado = document.querySelector('#estado')
let lblEstado = document.querySelector('#lblEstado')
let validEstado = false

let rua = document.querySelector('#rua')
let lblRua = document.querySelector('#lblRua')
let validRua = false

let numero = document.querySelector('#num')
let lblNum = document.querySelector('#lblNum')
let validNum = false

let bairro = document.querySelector('#bairro')
let lblBairro = document.querySelector('#lblBairro')
let validBairro = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

//eventos e funções

//Validar campos 
nome.addEventListener('keyup', () => {
    if(nome.value.length < 3){ //Se valor incorreto ao padrão
        lblNome.setAttribute('style','color: red')
        lblNome.innerHTML = 'Nome <strong> *Insira no mínimo 3 caracteres </strong>'
        validNome = false
    } else{
        lblNome.setAttribute('style','color: #adadad')
        lblNome.innerHTML = 'Nome'
        validNome = true
    }   
})

nasc.addEventListener('keyup', ()=> {
    if(nasc.value == ""){ //Se valor incorreto ao padrão
        lblNasc.setAttribute('style','color: red')
        lblNasc.innerHTML = 'Data de Nascimento <strong> * </strong>'
        validNasc = false
        console.log('vazio')
    } else{
        lblNasc.setAttribute('style','color: #adadad')
        lblNasc.innerHTML = 'Data de Nascimento'
        validNasc = true
        console.log('preenchido')
    }
})

tel.addEventListener('keyup', () => {
    if(tel.value.length < 15){ //Se valor incorreto ao padrão
        lblTel.setAttribute('style','color: red')
        lblTel.innerHTML = 'Telefone <strong> * </strong>'
        validTel = false
    } else{
        lblTel.setAttribute('style','color: #adadad')
        lblTel.innerHTML = 'Telefone'
        validTel = true
    }   
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length < 9){ //Se valor incorreto ao padrão
        lblUser.setAttribute('style','color: red')
        lblUser.innerHTML = 'Usuário / e-mail <strong> * </strong>'
        validUser = false
    } else{
        lblUser.setAttribute('style','color: #adadad')
        lblUser.innerHTML = 'Usuário / e-mail'
        validUser = true
    }   
})

senha.addEventListener('keyup', () => {

    if(senha.value.length < 3){ //Se valor incorreto ao padrão
        lblSenha.setAttribute('style','color: red')
        lblSenha.innerHTML = 'Senha <strong> *Insira no mínimo 3 caracteres </strong>'
        validSenha = false
    } else{
        lblSenha.setAttribute('style','color: #adadad')
        lblSenha.innerHTML = 'Senha'
        validSenha = true
    }   
})

confirmsenha.addEventListener('keyup', () => {

    if(confirmsenha.value != senha.value ){ //Se valor incorreto ao padrão
        lblConf.setAttribute('style','color: red')
        lblConf.innerHTML = 'Confirmar Senha <strong> *As senhas não conferem </strong>'
        validConf = false
    } else{
        lblConf.setAttribute('style','color: #adadad')
        lblConf.innerHTML = 'Confirmar Senha'
        validConf = true
    }   
})

cep.addEventListener('keyup', () => {

    if(cep.value.length < 10){ //Se valor incorreto ao padrão
        lblCep.setAttribute('style','color: red')
        lblCep.innerHTML = 'CEP <strong> *Insira no mínimo 10 caracteres </strong>'
        validCep = false
    } else{
        lblCep.setAttribute('style','color: #adadad')
        lblCep.innerHTML = 'CEP'
        validCep = true
    }   
})

city.addEventListener('keyup', () => {

    if(city.value != ""){ //Se valor incorreto ao padrão
        lblCity.setAttribute('style','color: red')
        lblCity.innerHTML = 'Cidade <strong> * </strong>'
        validCity = false
    } else{
        lblCity.setAttribute('style','color: #adadad')
        lblCity.innerHTML = 'Cidade'
        validCity = true
    }   
})

estado.addEventListener('keyup', () => {

    if(estado.value.length < 2){ //Se valor incorreto ao padrão
        lblEstado.setAttribute('style','color: red')
        lblEstado.innerHTML = 'Estado <strong> * </strong>'
        validEstado = false
    } else{
        lblEstado.setAttribute('style','color: #adadad')
        lblEstado.innerHTML = 'Estado'
        validEstado = true
    }   
})

rua.addEventListener('keyup', () => {

    if(rua.value.length < 3){ //Se valor incorreto ao padrão
        lblRua.setAttribute('style','color: red')
        lblRua.innerHTML = 'Rua <strong> * </strong>'
        validRua = false
    } else{
        lblRua.setAttribute('style','color: #adadad')
        lblRua.innerHTML = 'Rua'
        validRua = true
    }   
})

numero.addEventListener('keyup', () => {

    if(numero.value.length < 1){ //Se valor incorreto ao padrão
        lblNum.setAttribute('style','color: red')
        lblNum.innerHTML = 'Número <strong> * </strong>'
        validNum = false
    } else{
        lblNum.setAttribute('style','color: #adadad')
        lblNum.innerHTML = 'Número'
        validNum = true
    }   
})

bairro.addEventListener('keyup', () => {

    if(bairro.value.length < 1){ //Se valor incorreto ao padrão
        lblBairro.setAttribute('style','color: red')
        lblBairro.innerHTML = 'Bairro <strong> * </strong>'
        validBairro = false
    } else{
        lblBairro.setAttribute('style','color: #adadad')
        lblBairro.innerHTML = 'Bairro'
        validBairro = true
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
    let inputConf = document.querySelector('#confirmsenha')

    if(inputConf.getAttribute('type') == 'password'){
        inputConf.setAttribute('type', 'text')
    } else{
        inputConf.setAttribute('type', 'password')
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
                console.log('cep ok')
            }
            else if (req.status === 404) {
                //alert("CEP inválido");
                document.getElementById('cidade').value = 'Endereço não encontrado';

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

    //console.log('clicou')
    
    if(validNome && validTel && validUser && validSenha && validConf && validCep && validNum ){
    
        //alert('ok')
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                nascCad: nasc.value,
                telCad: tel.value,
                userCad: usuario.value,
                senhaCad: senha.value,
                cepCad: cep.value,
                cityCad: city.value,
                estadoCad: estado.value,
                ruaCad: rua.value,
                numCad: numero.value,
                bairroCad: bairro
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong> Cadastrando Usuário... </strong>'
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = ''

        setTimeout(()=>{
            window.location.href = '../html/Login.html'
        }, 3000)

    }
    else{
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = '<strong> Preencha todos os campos corretamente. </strong>'
        msgSucesso.setAttribute('style', 'display: none')
        msgSucesso.innerHTML = ''
        //alert('deu ruim')
    }
}