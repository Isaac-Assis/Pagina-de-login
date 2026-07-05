// Aguarda o HTML carregar completamente antes de rodar a lógica
document.addEventListener("DOMContentLoaded", function() {

    // =========================================================================
    // 🔐 1. TELA DE LOGIN (index.html)
    // =========================================================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o erro e o recarregamento

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Busca a lista de utilizadores guardados (ou cria uma vazia se não houver)
            const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Procura se existe algum utilizador com o mesmo e-mail e senha
            const usuarioValido = usuariosSalvos.find(user => user.email === email && user.password === password);

            if (usuarioValido) {
                alert('Login realizado com sucesso!');
                window.location.href = 'usuarios.html';
            } else {
                alert('Erro no login: E-mail ou senha incorretos.');
            }
        });
    }

    // =========================================================================
    // 📝 2. TELA DE CADASTRO (cadastro.html)
    // =========================================================================
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('cadastroName').value;
            const email = document.getElementById('cadastroEmail').value;
            const password = document.getElementById('cadastroPassword').value;
            const confirmPassword = document.getElementById('cadastroConfirmPassword').value;

            // Validação de senhas idênticas
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }

            // Pega a lista existente do localStorage
            const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Verifica se o e-mail já está cadastrado
            const emailExistente = usuariosSalvos.some(user => user.email === email);
            if (emailExistente) {
                alert('Este e-mail já está registado!');
                return;
            }

            // Adiciona o novo utilizador à lista
            usuariosSalvos.push({ name, email, password });

            // Guarda a lista atualizada no localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuariosSalvos));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html';
        });
    }

    // =========================================================================
    // 📊 3. TELA DE LISTAGEM DE USUÁRIOS (usuarios.html)
    // =========================================================================
    const tabelaUsuarios = document.getElementById('tabelaUsuarios');
    if (tabelaUsuarios) {
        // Função que busca os dados armazenados localmente no navegador
        function carregarUsuariosLocais() {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Limpa o texto de "Carregando..."
            tabelaUsuarios.innerHTML = '';

            if (usuarios.length === 0) {
                tabelaUsuarios.innerHTML = `
                    <tr>
                        <td colspan="2" style="text-align: center;">Nenhum usuário cadastrado ainda.</td>
                    </tr>
                `;
                return;
            }

            // Percorre a lista salva e cria dinamicamente as linhas da tabela
            usuarios.forEach(user => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                `;
                tabelaUsuarios.appendChild(linha);
            });
        }

        // Executa a listagem automática
        carregarUsuariosLocais();
    }
});