//App JS Voar.com//
//Luan Freire, 2025//

//Função de Validação de Login //
logar = () => {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email == "admin" && senha == "admin") {
        location.href = "home.html";
        document.getElementById("email").value = "";
        document.getElementById("email").value = "";

    } else {
        alert("Usuário ou Senha incorretos, por favor tente novamente ou crie sua conta.");
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
    }
}

//Ver, Esconder Senha //
//Visualizar Senha//
verSenha = () => {
    let inputSenha = document.getElementById("inputSenha");
    inputSenha.type = "text";

    let ver = document.querySelector (".ver");
    let esconder = document.querySelector(".esconder");
    ver.style.display = "none";
    esconder.style.display = "block";
}

esconderSenha = () => {
    let inputSenha = document.getElementById("inputSenha");
    inputSenha.type = "password";

    let ver = document.querySelector(".ver");
    let esconder = document.querySelector(".esconder");
    esconder.style.display = "none";
    ver.style.display = "block";
}

//Função Lembrar Email//
salvarEmail = () => {
    let email = document.getElementById("email").value;
    localStorage.setItem("emailSalvo", email);
}

//Carregar Email Salvo//
window.onload = () => {
    let emailSalvo = localStorage.getItem("emailSalvo");
    if (emailSalvo) {
        document.getElementById("email").value = emailSalvo;
    } else {
        document.getElementById("email").value = "";
    }
}

//Remove Email Salvo, caso CheckBox esteja desmarcado //
const checkBox = document.getElementById("checkBoxSalvar");
const chaveLocalStorage = "emailSalvo";

checkBox.addEventListener("change", () => {
    if (!checkBox.checked) {
        localStorage.removeItem(chaveLocalStorage);
        document.getElementById("email").value = "";
    }
})

//Seção Modal Esqueceu Senha //
//Abrir Modal//
btnEsqueceu = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let modalE_Senha = document.querySelector(".modalE_Senha");

    modalE_Senha.style.display = "flex";
    modalLogin.style.display = "none";
}

//Fechar Modal//
btnReturn = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let modalE_Senha = document.querySelector(".modalE_Senha");

    modalLogin.style.display = "flex";
    modalE_Senha.style.display = "none";
}

//BTN Recuperar Senha//
btnRecuperarSenha = () => {
    let inputEmail = document.getElementById("inputEmail").value;
    let inputConfirmarEmail = document.getElementById("inputConfirmarEmail").value;
    let contentEsqueceuSenha = document.querySelector(".contentEsqueceuSenha");
    let msgSucessoE_Senha = document.getElementById("msgSucessoE_Senha");

    if (inputEmail == "admin" && inputConfirmarEmail == "admin") {
        contentEsqueceuSenha.style.display = "none";
        msgSucessoE_Senha.style.display = "block";

        //Função Mensagem de Sucesso//
        msgSucessoEmail = () => {
            const msgSucessoE_Senha = document.getElementById("msgSucessoE_Senha");

            msgSucessoE_Senha.innerHTML = `
                <div class="mainMsgSucesso">
                    <i class="bi bi-envelope-check-fill"></i>
                    <h2>Email enviado com Sucesso !</h2>
                    <p>Verifique sua caixa Principal e Spam. No email haverá um link para alteração de Senha.</p>
                </div>
    
                <div class="btnPrincipal">
                    <button onclick="btnReturn()">Voltar</button>
                </div>`
        }
        msgSucessoEmail();

        document.getElementById("inputEmail").value = ""
        document.getElementById("inputConfirmarEmail").value = "";

    } else {
        alert("Email inválido, por favor tente novamente.");

        document.getElementById("inputEmail").value = ""
        document.getElementById("inputConfirmarEmail").value = "";
    }
}

//Seção Modal Cadastre-se //

// Abrir Modal Cadastre-se //
btnCadastrar = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let modalCadastro = document.querySelector(".secaoCadastro");

    modalLogin.style.display = "none";
    modalCadastro.style.display = "flex";
}

// Btn voltar ao modal Login //
voltarCadastro = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let modalCadastro = document.querySelector(".secaoCadastro");

    modalLogin.style.display = "flex";
    modalCadastro.style.display = "none";
}

//Validação Cadastro //
validarCadastro = () => {
    let inputsCadastro = document.getElementById("inputCadastro").value;

    if (inputsCadastro != "") {
        let secaoCadastro = document.querySelector(".secaoCadastro");
        let msgS_Cadastro = document.getElementById("msgS_Cadastro");

        msgS_Cadastro.style.display = "flex";
        secaoCadastro.style.display = "none";

        msgSucessoCadastro = () => {
            let modalS_Cadastro = document.querySelector(".modalS_Cadastro");

            modalS_Cadastro.innerHTML = `
            
            <div class="mainMsgSucesso">
                <i class="bi bi-person-check-fill"></i>
                <h2>Cadastro Confirmado !</h2>
                <p>Parabéns, seu cadastro foi realizado com sucesso ! Verifique seu email para confirmação.</p>
                <div class="btnPrincipal">
                    <button onclick="fecharModalCadastro()">Voltar</button>
                </div>    
            </div>`
        }
        msgSucessoCadastro();
        document.getElementById("inputCadastro").value = "";

    } else {
        alert("Desculpe, algum campo não foi preenchido, tente novamente.")
    }
}

//BTN Voltar Sucesso Cadastro //
fecharModalCadastro = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let msgS_Cadastro = document.querySelector(".msgS_Cadastro");

    modalLogin.style.display = "flex";
    msgS_Cadastro.style.display = "none";
}