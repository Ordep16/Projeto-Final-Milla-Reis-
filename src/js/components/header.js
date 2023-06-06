export const header = {
    template: () => {
        let template = document.getElementsByTagName("template")[0];
        return document.getElementById("NavBar").appendChild(template);
    }
}
    < html >
    < template>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">Escola WEB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./alunoLista.html">Lista Alunos</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item menu-aluno-off">
                            <a class="nav-link" href="./alunoCadastro.html">Cadastro</a>
                        </li>
                        <li class="nav-item menu-aluno-off">
                            <a class="nav-link" href="./alunoLogin.html">Entrar</a>
                        </li>
                        <li class="nav-item menu-aluno-on">
                            <a class="nav-link" href="./alunoCadastro.html" id="nome-user"></a>
                        </li>
                        <li class="nav-item menu-aluno-on">
                            <a class="nav-link" href="" onclick="sairAluno()">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </template >
</html >