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

//Função de Visualizar Senha //
verSenha = () => {
    let verSenha = document.getElementById("senha");
    verSenha.type = "text";

    let btnVerSenha = document.querySelector(".ver");
    let btnEsconderSenha = document.querySelector(".esconder");

    btnEsconderSenha.style.display = "block";
    btnVerSenha.style.display = "none";
}

//Função Esconder Senha//
esconderSenha = () => {
    let verSenha = document.getElementById("senha");
    verSenha.type = "password";

    let btnVerSenha = document.querySelector (".ver");
    let btnEsconderSenha =  document.querySelector (".esconder");

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
    if(emailSalvo){
        document.getElementById("email").value = emailSalvo;
    } else {
        document.getElementById("email").value = "";
    }
}

//Remove Email Salvo, caso CheckBox esteja desmarcado //
const checkBox = document.getElementById("checkBoxSalvar");
const chaveLocalStorage = "emailSalvo";

checkBox.addEventListener("change", () => {
    if(!checkBox.checked){
        localStorage.removeItem(chaveLocalStorage);
        document.getElementById("email").value = "";
    }
})

//Abrir Modal Esqueceu Senha//
btnEsqueceu = () => {
    let modalLogin = document.querySelector (".boxLogin");
    let modalEsqueceuSenha = document.querySelector (".modalEsqueceuSenha");

    modalEsqueceuSenha.style.display = "flex";
    modalLogin.style.display = "none";
}

//Fechar Modal Esqueceu Senha//
btnReturn = () => {
    let modalLogin = document.querySelector (".boxLogin");
    let modalEsqueceuSenha = document.querySelector (".modalEsqueceuSenha");

    modalLogin.style.display = "flex";
    modalEsqueceuSenha.style.display = "none";
}