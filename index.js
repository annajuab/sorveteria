botao.addEventListener ('click', function(){

    var nomeCliente = nome.value;
    var quantiaSorvete = quantidade.value;
    var saborCliente = sabor.value;

    /*alert("Nome:  " + nomeCliente  + "  Quantidade:  " + quantiaSorvete   +  "  Sabor:  " + saborCliente ); */

    pedidoNome.innerHTML = "Nome: " +  nomeCliente;
    pedidoQuantia.innerHTML = "Quantia: " +  quantiaSorvete;
    pedidoSabor.innerHTML = "Sabor: "  +  saborCliente
});
