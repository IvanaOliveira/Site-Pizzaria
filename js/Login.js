//Mostrar e ocultar senha
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

//Função do botão Cadastrar
function entrar(){

  console.log('botão clicado')
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#lblUser')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#lblSenha')
    
    let msgErro = document.querySelector('#msgErro')
    let listaUser = []
    
    let userValid = {
      nome: '',
      user: '',
      senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    //console.log(listaUser)
    
    listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad){
         
        userValid = {
           nome: item.nomeCad,
           user: item.userCad,
           senha: item.senhaCad
         }
        
      }
    })
     
    //console.log(userValid)

    if(usuario.value == userValid.user && senha.value == userValid.senha){

      console.log ('Deu certo')

      window.location.href = '../html/Index.html'
      
      let mathRandom = Math.random().toString(16).substring(2)
      let token = mathRandom + mathRandom

      console.log(token)
      
      localStorage.setItem('token', token)
      //localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
      
      console.log('Deu errado')
      userLabel.setAttribute('style', 'color: red')
      userLabel.innerHTML = 'Usuário / e-mail <strong> * </strong>'
      senhaLabel.setAttribute('style', 'color: red')
      senhaLabel.innerHTML = 'Senha <strong> * </strong>'

      msgErro.setAttribute('style', 'display: block')
      msgErro.innerHTML = 'Usuário ou senha incorretos'
      usuario.focus()
    }
    
}