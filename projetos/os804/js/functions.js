// functions.js

function enviarDados() {
    // Captura os valores dos campos
    const Empresa = document.getElementById("empresa").value; 
    const Cliente = document.getElementById("cliente").value;   
    const Produto = document.getElementById("produto").value;     
    const Descricao = document.getElementById("descricao").value;  // Corrigido "descricao"
    const Qtd = document.getElementById("qtd").value;        
    const ValorU = document.getElementById("valorU").value;

    // Calcula o Valor Total
    const ValorT = (parseFloat(Qtd) * parseFloat(ValorU)).toFixed(2);  // Cálculo de ValorT

    const DtEncomenda = document.getElementById("dtenc").value;      
    const DtEntrega = document.getElementById("dtEntrega").value;   

    // Salva os dados no SessionStorage
    sessionStorage.setItem("Empresa", Empresa);
    sessionStorage.setItem("Cliente", Cliente);
    sessionStorage.setItem("Produto", Produto);
    sessionStorage.setItem("Descricao", Descricao);
    sessionStorage.setItem("Qtd", Qtd);
    sessionStorage.setItem("ValorU", ValorU);
    sessionStorage.setItem("ValorT", ValorT); // Salva o Valor Total calculado
    sessionStorage.setItem("DtEncomenda", DtEncomenda);
    sessionStorage.setItem("DtEntrega", DtEntrega);

    // Redireciona para a outra página
    window.location.href = "os_print.html";
}

function exibirDados() {
    // Recupera os dados do SessionStorage
    const Empresa = sessionStorage.getItem("Empresa"); 
    const Cliente = sessionStorage.getItem("Cliente");   
    const Produto = sessionStorage.getItem("Produto");     
    const Descricao = sessionStorage.getItem("Descricao");
    const Qtd = sessionStorage.getItem("Qtd");        
    const ValorU = sessionStorage.getItem("ValorU");      
    const ValorT = sessionStorage.getItem("ValorT");     
    const DtEncomenda = sessionStorage.getItem("DtEncomenda");     
    const DtEntrega = sessionStorage.getItem("DtEntrega"); 
    
    // Converte as datas para o padrão pt-BR
    const dataEncomendaFormatada = new Date(DtEncomenda).toLocaleDateString("pt-BR");
    const dataEntregaFormatada = new Date(DtEntrega).toLocaleDateString("pt-BR");


    // Exibe os dados na página
    document.getElementById("exibirEmpresa").textContent = Empresa;
    document.getElementById("exibirCliente").textContent = Cliente;
    document.getElementById("exibirProduto").textContent = Produto;
    document.getElementById("exibirDescricao").textContent = Descricao;
    document.getElementById("exibirQtd").textContent = Qtd;
    document.getElementById("exibirValorU").textContent = ValorU;
    document.getElementById("exibirValorT").textContent = ValorT;
    document.getElementById("exibirDataEncomenda").textContent = dataEncomendaFormatada;
    document.getElementById("exibirDataEntrega").textContent = dataEntregaFormatada;

    window.print();
}
