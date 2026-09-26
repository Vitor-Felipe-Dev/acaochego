const projetos = [
  {
    titulo: "Campanha de Adoção",
    descricao:
      "Nosso projeto de adoção busca encontrar novos lares para animais que precisam de uma família. Incentivamos a adoção responsável e o cuidado com os animais.",
    tipo: "Adoção",
  },
  {
    titulo: "Doações",
    descricao:
      "A Acaochego recebe doações para ajudar na alimentação, medicamentos, tratamentos veterinários e outros cuidados necessários para os animais acolhidos.",
    tipo: "Doação",
  },
  {
    titulo: "Voluntariado",
    descricao:
      "Pessoas interessadas podem participar como voluntárias, ajudando nos cuidados com os animais, na organização das campanhas e na divulgação das ações da ONG.",
    tipo: "Voluntariado",
    imagem: "./imagens/voluntario_alimentando.jpg",
    alt: "Pessoa alimentando animais acolhidos",
  },
];

/* Geração dos projetos */

function gerarProjetos() {
  return projetos
    .map((projeto) => {
      const classeBadge = {
        Adoção: "badge-adocao",
        Doação: "badge-doacao",
        Voluntariado: "badge-voluntariado",
      };

      return `
            <section class="projeto">

                <span class="badge ${classeBadge[projeto.tipo]}">
                    ${projeto.tipo}
                </span>

                <h2>${projeto.titulo}</h2>

                <p>${projeto.descricao}</p>

            </section>
        `;
    })
    .join("");
}

/* Páginas */

const paginas = {
  inicio: `
    <section>
        <h2>Nossa missão</h2>

        <img
            src="./imagens/vet_cuidando_dos_animais.jpg"
            alt="Veterinária cuidando de um animal"
        />

        <p>
            A Acaochego é uma organização dedicada à proteção e ao bem-estar dos
            animais. Nosso objetivo é oferecer cuidado, acolhimento e novas
            oportunidades para animais que precisam de ajuda.
        </p>

        <p>
            Trabalhamos para incentivar a adoção responsável, combater o abandono
            e conscientizar a comunidade sobre a importância do respeito e dos
            cuidados com os animais.
        </p>
    </section>

    <section>
        <h2>Sobre a Acaochego</h2>

        <img
            src="./imagens/cachorros_e_gatos.png"
            alt="Cães e gatos acolhidos pela Acaochego"
        />

        <p>
            A Acaochego é uma organização voltada para a proteção e o cuidado de
            animais em situação de abandono e vulnerabilidade.
        </p>

        <p>
            Nosso trabalho busca oferecer acolhimento, cuidados básicos e
            oportunidades para que esses animais encontrem um novo lar, recebendo
            carinho, respeito e uma vida digna.
        </p>
    </section>

    <section>
        <h2>Projetos</h2>

        <p>
            Desenvolvemos projetos voltados à proteção animal, incluindo campanhas
            de adoção, arrecadação de doações, ações de voluntariado e iniciativas
            de conscientização.
        </p>

        <a href="#projetos">Conheça nossos projetos</a>
    </section>

    <section>
        <h2>Participe</h2>

        <p>
            Você também pode fazer parte dessa causa. É possível contribuir
            realizando doações, participando como voluntário ou ajudando na
            divulgação das nossas ações.
        </p>

        <p>
            Toda ajuda pode fazer a diferença na vida de um animal que precisa de
            cuidado e acolhimento.
        </p>

        <a href="#cadastro">Cadastre-se</a>

        <a href="#modal">Quero ajudar</a>
    </section>
`,

  projetos: `
       <div class="alert" role="alert">
        <strong>⚠️ Atenção!</strong>

        <p>
            A adoção responsável ajuda a garantir uma vida melhor para os animais.
        </p>
    </div>


        ${gerarProjetos()}
    `,

  cadastro: `
    <form action="#">
        <fieldset>
            <legend>Cadastre-se</legend>

            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" required />

            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" required />

            <label for="telefone">Telefone</label>
            <input
                type="tel"
                name="telefone"
                id="telefone"
                pattern="[0-9]{10,11}"
                required
            />

            <label for="cep">CEP</label>
            <input
                type="text"
                name="cep"
                id="cep"
                pattern="[0-9]{8}"
                required
            />

            <label for="cpf">CPF</label>
            <input
                type="text"
                name="cpf"
                id="cpf"
                pattern="[0-9]{11}"
                required
            />

            <label for="nascimento">Data de nascimento</label>
            <input
                type="date"
                name="nascimento"
                id="nascimento"
                required
            />

            <label for="cidade">Cidade</label>
            <input
                type="text"
                name="cidade"
                id="cidade"
                required
            />

            <label for="estado">Estado</label>
            <select name="estado" id="estado" required>
                <option value="">Selecione seu estado</option>
                <option value="sp">São Paulo</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="mg">Minas Gerais</option>
                <option value="sc">Santa Catarina</option>
            </select>

            <button type="submit">Enviar</button>
        </fieldset>
    </form>

    <div class="toast" role="status">
        ✓ Cadastro realizado com sucesso!
    </div>
`,
};

/* Elemento principal */

const conteudo = document.querySelector("#conteudo-principal");

const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".menu");

const projetosMenu = document.querySelector(".dropdown");
const submenu = document.querySelector(".submenu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

projetosMenu.addEventListener("click", (event) => {

    if (window.innerWidth <= 768) {

        if (event.target.closest(".submenu")) {
            return;
        }

        event.preventDefault();
        submenu.classList.toggle("aberto");
    }
});

/* Renderização da página */
function renderizarPagina() {
  const hashAtual = window.location.hash.slice(1) || "inicio";

  if (hashAtual === "modal") {
    return;
  }

  const pagina = paginas[hashAtual] || paginas.inicio;

  conteudo.innerHTML = pagina;
}

/* Inicialização */

renderizarPagina();

window.addEventListener("hashchange", renderizarPagina);
