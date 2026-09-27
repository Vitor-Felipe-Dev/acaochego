console.log("validacao.js carregou!");

function mostrarErro(campo, mensagemTexto) {

    let mensagem = campo.nextElementSibling;

    if (!mensagem || !mensagem.classList.contains("mensagem-erro")) {

        mensagem = document.createElement("small");
        mensagem.classList.add("mensagem-erro");

        campo.insertAdjacentElement("afterend", mensagem);
    }

    mensagem.textContent = mensagemTexto;
}

function removerErro(campo) {

    const mensagem = campo.nextElementSibling;

    if (mensagem && mensagem.classList.contains("mensagem-erro")) {
        mensagem.remove();
    }
}


// ==============================
// VALIDAÇÃO EM TEMPO REAL
// ==============================

document.addEventListener("input", (event) => {

    if (event.target.id === "nome") {

        const campo = event.target;

        if (campo.value.trim() === "") {
            mostrarErro(campo, "Digite seu nome completo.");
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "email") {

        const campo = event.target;

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value);

        if (!emailValido) {
            mostrarErro(campo, "Digite um email válido.");
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "telefone") {

        const campo = event.target;

        const telefoneValido =
            /^[0-9]{10,11}$/.test(campo.value);

        if (!telefoneValido) {
            mostrarErro(
                campo,
                "Digite um telefone válido com 10 ou 11 números."
            );
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "cpf") {

        const campo = event.target;

        const cpfValido =
            /^[0-9]{11}$/.test(campo.value);

        if (!cpfValido) {
            mostrarErro(
                campo,
                "Digite um CPF com 11 números."
            );
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "cep") {

        const campo = event.target;

        const cepValido =
            /^[0-9]{8}$/.test(campo.value);

        if (!cepValido) {
            mostrarErro(
                campo,
                "Digite um CEP com 8 números."
            );
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "nascimento") {

        const campo = event.target;

        if (campo.value === "") {
            mostrarErro(
                campo,
                "Informe sua data de nascimento."
            );
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "cidade") {

        const campo = event.target;

        if (campo.value.trim() === "") {
            mostrarErro(
                campo,
                "A cidade é obrigatória."
            );
        } else {
            removerErro(campo);
        }
    }

    if (event.target.id === "estado") {

        const campo = event.target;

        if (campo.value === "") {
            mostrarErro(
                campo,
                "Selecione um estado."
            );
        } else {
            removerErro(campo);
        }
    }
});


// ==============================
// VALIDAÇÃO NO ENVIO DO FORMULÁRIO
// ==============================

document.addEventListener("submit", (event) => {

    const formulario = event.target;

    if (!formulario.matches("form")) {
        return;
    }

    event.preventDefault();

    console.log("SUBMIT DETECTADO!");

    const nome = formulario.elements.nome;
    const email = formulario.elements.email;
    const telefone = formulario.elements.telefone;
    const cep = formulario.elements.cep;
    const cpf = formulario.elements.cpf;
    const nascimento = formulario.elements.nascimento;
    const cidade = formulario.elements.cidade;
    const estado = formulario.elements.estado;

    let formularioValido = true;


    if (nome.value.trim() === "") {

        mostrarErro(
            nome,
            "O nome é obrigatório."
        );

        formularioValido = false;
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {

        mostrarErro(
            email,
            "Digite um email válido."
        );

        formularioValido = false;
    }


    if (!/^[0-9]{10,11}$/.test(telefone.value)) {

        mostrarErro(
            telefone,
            "Digite um telefone válido com 10 ou 11 números."
        );

        formularioValido = false;
    }


    if (!/^[0-9]{11}$/.test(cpf.value)) {

        mostrarErro(
            cpf,
            "Digite um CPF com 11 números."
        );

        formularioValido = false;
    }


    if (!/^[0-9]{8}$/.test(cep.value)) {

        mostrarErro(
            cep,
            "Digite um CEP com 8 números."
        );

        formularioValido = false;
    }


    if (nascimento.value === "") {

        mostrarErro(
            nascimento,
            "Informe sua data de nascimento."
        );

        formularioValido = false;
    }


    if (cidade.value.trim() === "") {

        mostrarErro(
            cidade,
            "A cidade é obrigatória."
        );

        formularioValido = false;
    }


    if (estado.value === "") {

        mostrarErro(
            estado,
            "Selecione um estado."
        );

        formularioValido = false;
    }


    if (formularioValido) {

        console.log("FORMULÁRIO VÁLIDO!");

        formulario.dispatchEvent(
            new CustomEvent("formularioValido")
        );

    } else {

        console.log("FORMULÁRIO POSSUI ERROS!");

    }

});
