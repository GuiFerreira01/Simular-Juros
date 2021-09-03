
function juros_composto() {
    var nome, mensalidade, juros, anos;
  
    
    nome = $("#nome").val();
    mensalidade = Number($("#Mensalidade").val());
    juros = (mensalidade*((1+0.03)^(anos*12)-1))/0.03;
    anos = Number($("#anos").val());
    arredondado = parseFloat(juros.toFixed(2));


    $(".col-4").addClass("d-none");
    $(".textinho").addClass("d-none");
    $(".col-8").removeClass("d-none");
    $(".result-value").html(`<p> Óla ${nome}, juntando R$${mensalidade} todo mês, você terá R$${arredondado} em ${anos} anos com uma taxa de 3% </p>`);

}

function voltar() {
    $("input").val("");

    $(".col-4").removeClass("d-none");
    $(".show-result").addClass("d-none");

}