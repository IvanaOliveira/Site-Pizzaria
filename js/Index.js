let pizzaItem = document.querySelector('.container .paineis .pizza')

let btCompra = document.getElementById('btC');

btCompra.onclick = compra;

pizzaItem.querySelector('.pizza button').addEventListener('compra',(e) =>{
    e.preventDefault()
    console.log('clicou na pizza')
})




/*function compra(e){
    e.preven
    console.log('clico');
}

let carrinho = document.querySelector('.container .sacola')

/*carrinho.onclick = Carrinho;

function Carrinho(c){
    c.preventDefault()
    console.log('clicou no carrinho')
    //window.location.href="../html/Carrinho.html"
}

carrinho.querySelector('.sacola').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicou no carrinho')
})

const carrinho = () => {

}*/

/*let pizzaItem = document.querySelector('.container .pizza')

pizzaItem.querySelector('.pizza button').addEventListener('click',(e) =>{
    e.preventDefault()
    console.log('clicou na pizza')
})*/

