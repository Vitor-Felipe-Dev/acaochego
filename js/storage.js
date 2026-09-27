console.log("storage.js carregou!");


// ==============================
// SALVAR DADOS DO FORMULÁRIO
// ==============================

document.addEventListener("formularioValido", (event) => {

    const formulario = event.target;

    const dadosFormulario = {
        nome: formulario.elements.nome.value,
        email: formulario.elements.email.value,
        telefone: formulario.elements.telefone.value,
        cpf: formulario.elements.cpf.value,
        cep: formulario.elements.cep.value,
        nascimento: formulario.elements.nascimento.value,
        cidade: formulario.elements.cidade.value,
        estado: formulario.elements.estado.value
    };

    localStorage.setItem(
        "cadastroAcaochego",
        JSON.stringify(dadosFormulario)
    );

    console.log("Dados válidos salvos no localStorage!");
});


// ==============================
// RECUPERAR DADOS SALVOS
// ==============================

const dadosSalvos = localStorage.getItem("cadastroAcaochego");

if (dadosSalvos) {

    const dados = JSON.parse(dadosSalvos);

    console.log("Dados recuperados:", dados);
}


// ==============================
// PREENCHER FORMULÁRIO AUTOMATICAMENTE
// ==============================

window.addEventListener("hashchange", () => {

    if (window.location.hash !== "#cadastro") {
        return;
    }

    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    const dadosSalvos = localStorage.getItem("cadastroAcaochego");

    if (!dadosSalvos) {
        return;
    }

    const dados = JSON.parse(dadosSalvos);

    formulario.elements.nome.value = dados.nome;
    formulario.elements.email.value = dados.email;
    formulario.elements.telefone.value = dados.telefone;
    formulario.elements.cpf.value = dados.cpf;
    formulario.elements.cep.value = dados.cep;
    formulario.elements.nascimento.value = dados.nascimento;
    formulario.elements.cidade.value = dados.cidade;
    formulario.elements.estado.value = dados.estado;

    console.log("Formulário preenchido com dados salvos!");
});
