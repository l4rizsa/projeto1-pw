
function login() {
    let email = document.getElementById("loginEmail").value;
    let senha = document.getElementById("loginSenha").value;

    if (email === "admin@gmail.com" && senha === "123") {
        alert("Login realizado! 🚀");
    } else {
        alert("Email ou senha incorretos!");
    }
}
