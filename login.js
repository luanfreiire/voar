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

//Seção Ver, Esconder Senha //
//Visualizar Senha//
verSenha = () => {
    let verSenha = document.getElementById("senha");
    verSenha.type = "text";

    let btnVerSenha = document.querySelector(".ver");
    let btnEsconderSenha = document.querySelector(".esconder");

    btnEsconderSenha.style.display = "block";
    btnVerSenha.style.display = "none";
}

//Esconder Senha//
esconderSenha = () => {
    let verSenha = document.getElementById("senha");
    verSenha.type = "password";

    let btnVerSenha = document.querySelector(".ver");
    let btnEsconderSenha = document.querySelector(".esconder");

    btnVerSenha.style.display = "block";
    btnEsconderSenha.style.display = "none";
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
    let modalEsqueceuSenha = document.querySelector(".modalEsqueceuSenha");

    modalEsqueceuSenha.style.display = "flex";
    modalLogin.style.display = "none";
}

//Fechar Modal//
btnReturn = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let modalEsqueceuSenha = document.querySelector(".modalEsqueceuSenha");

    modalLogin.style.display = "flex";
    modalEsqueceuSenha.style.display = "none";
}

//BTN Recuperar Senha//
btnRecuperarSenha = () => {
    let inputEmail = document.getElementById("inputEmail").value;
    let inputConfirmarEmail = document.getElementById("inputConfirmarEmail").value;
    let contentEsqueceuSenha = document.querySelector(".contentEsqueceuSenha");
    let contentSucesso = document.getElementById ("contentSucesso");

    if (inputEmail == "admin" && inputConfirmarEmail == "admin") {
        contentEsqueceuSenha.style.display = "none";
        contentSucesso.style.display = "block";

        //Função Mensagem de Sucesso//
        msgSucessoEmail = () => {
            const contentSucesso = document.getElementById("contentSucesso");
        
            contentSucesso.innerHTML = `
                <div class="headerSucesso">
                    <i class="bi bi-envelope-check-fill"></i>
                </div>
        
                <div class="mainSucesso">
                    <h3>Email enviado com Sucesso !</h3>
                </div>
        
                <div class="footerSucesso">
                    <p>Verifique sua caixa Principal e Spam. No email haverá um link para alteração de Senha.</p>
                 </div>
        
                <div class="btnRetorno">
                    <button onclick="btnReturn()">Voltar</button>
                </div>`
        }
        msgSucessoEmail ();

        document.getElementById("inputEmail").value = ""
        document.getElementById("inputConfirmarEmail").value = "";
        
    }else{
        alert ("Email inválido, por favor tente novamente.");

        document.getElementById("inputEmail").value = ""
        document.getElementById("inputConfirmarEmail").value = "";
    }
}

//Seção Modal Cadastre-se//

//Abrir Modal//
btnCadastrar = () => {
    let modalLogin = document.querySelector (".boxLogin");
    let modalCadastrar = document.querySelector (".modalCadastrar");

    modalLogin.style.display = "none";
    modalCadastrar.style.display = "flex";
}

//Validar Cadastro//
validarCadastro = () => { // ATENÇÃO NECESSÁRIA //
    let inputNome = document.getElementById("inputCadastroNome").value;
    let inputEmail = document.getElementById("inputCadastroEmail").value;
    let inputSenha = document.getElementById("inputCadastroSenha").value;

    if(inputNome != "" && inputEmail == "admin" && inputSenha == "admin"){
        alert("Sucesso ! Seu cadastro foi confirmado.");

        document.getElementById("inputCadastroNome").value = "";
        document.getElementById("inputCadastroEmail").value = "";
        document.getElementById("inputCadastroSenha").value = "";

    }else {
        alert ("Algo não foi preenchido corretamente, tente novamente. (email:admin, senhas:admin)");
    }
}


//BTN Voltar modal cadastre-se à Login//
returnCadastro = () => {
    let modalLogin = document.querySelector(".boxLogin");
    let modalCadastrar = document.querySelector(".modalCadastrar");

    modalCadastrar.style.display = "none";
    modalLogin.style.display = "flex"
}