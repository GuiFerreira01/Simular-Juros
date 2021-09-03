
function juros_composto() {
    var nome, mensalidade, juros, anos, i, n;
  
    i = 0.03
    nome = $("#nome").val();
    mensalidade = Number($("#Mensalidade").val());
    anos = Number($("#anos").val());
    juros = (mensalidade * (1+0.03) * ((Math.pow(1+0.03,(anos*12))-1)/0.03)).toFixed(2);

    console.log(juros)
    console.log(mensalidade)
    console.log(anos)

    $(".col-4").addClass("d-none");
    $(".textinho").addClass("d-none");
    $(".col-8").removeClass("d-none");
    $(".result-value").html(`<p> Óla ${nome}, juntando R$${mensalidade} todo mês, você terá R$${juros} em ${anos} anos com uma taxa de 3% </p>`);

}

function voltar() {
    $("input").val("");

    $(".col-4").removeClass("d-none");
    $(".show-result").addClass("d-none");

}