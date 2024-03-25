$(document).ready(function() {
    // alert("babau");
    $(".card").hide();

    $('#altura').mask('0.00');
    $('#peso').mask("000.00", {reverse: true});
    

    $("#calcularBtn").on("click", function(){           
    if ($(".card").is(":visible")) {
        $(".card").hide();
    } else {
        $(".card").show();
    }
});

    $('#calcularBtn').click(function() {
        var peso = $('#peso').val();
        var altura = $('#altura').val();

        if (peso && altura) {
            var imc = peso / (altura * altura);
            $('#imc').text(imc.toFixed(2));

            var classificacao = '';

            if (imc < 18.5) {
                classificacao = 'Baixo peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = 'Eutrofia (peso adequado)';
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = 'Sobrepeso';
            } else if (imc >= 30 && imc <= 34.9) {
                classificacao = 'Obesidade grau 1';
            } else if (imc >= 35 && imc <= 39.9) {
                classificacao = 'Obesidade grau 2';
            } else {
                classificacao = 'Obesidade extrema';
            }

            $('#classificacao').text(classificacao);
        } else {
            alert('Por favor, insira seu peso e altura.');
            $(".card").hide();
        }
    });
});