function validacao() {
    let cargaHoraria1 = document.getElementById('cargaHoraria').value;
    if (cargaHoraria1 === "") {
        alert("A Carga Horaria deve ser Informada");
        return false; // Retorna falso se a validação falhar
    }
    
    let faltas1 = document.getElementById('faltas').value;
    if (faltas1 === "") {
        alert("A Quantidade de Faltas deve ser Informada");
        return false; // Retorna falso se a validação falhar
    }
    
    return true; // Retorna verdadeiro se a validação passar
}

function calcularFalta() {
    if (!validacao()) {
        return; // Sai da função se a validação falhar
    }

    var cargaHoraria = parseInt(document.getElementById("cargaHoraria").value);
    var faltas = parseInt(document.getElementById("faltas").value);

    var presenca = ((cargaHoraria - faltas) / cargaHoraria) * 100;

    if (presenca >= 75) {
        document.getElementById("resultado").innerHTML = "Aluno aprovado por presença!";
    } else {
        document.getElementById("resultado1").innerHTML = "Aluno reprovado por falta!";
    }
}