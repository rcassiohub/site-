function enviaContato() {
    var erros = validaContato();
    mensagemErro.innerHTML = '';

    if (erros.length > 0) {
        for (var i = 0; i < erros.length; i++) {
            var erro = erros[i]; // percorrendo os TODOS os ERROS       
            var li = document.createElement("li"); //Cria um elemento do HTML no JS
            li.innerHTML = erro;

            mensagemErro.appendChild(li); // vai dar um "filho" para o "mensagemErro" 
        }
    }else{
        alert("Suas informações foram transferidas com sucesso!");
        nome_contato.value='';
        email_contato.value='';
        mensagem_contato.value='';
        tel_contato.value='';
    }
}


function validaContato() {
    var erros = []; // vetor "armazena" vários valores em um nome, permitindo a percorrência desses valores 
    if (!nome_contato.value) {
        erros.push("Preencha o nome"); //Empurra esta informação dentro do vetor "erros"
    }
    if ((email_contato.value.search("@") == -1) ||
        (email_contato.value.search(".") == -1) ||
        (email_contato.value.search(" ") >= 1))  {
        erros.push("O formato de e-mail é: usuario@dominio.com");

    }
    if (!mensagem_contato.value) {
        erros.push("Preencha a mensagem!")
    }
    if ((tel_contato.value.search("-") == -1) ||
        tel_contato.value[tel_contato.value.length - 5] != "-"
    ) {
        erros.push("O formato do telefone é: 0090000-0000");
    }
    return erros;
}


