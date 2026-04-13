function enviar() {
  let nome = document.getElementById("i_nome").value;
  let email = document.getElementById("i_email").value;
  let mensagem = document.getElementById("i_mensagem").value;

  let alerta = document.getElementById("alerta");

  if (nome.trim() == "" || email.trim() == "" || mensagem.trim() == "") {
    alerta.style.display = "block";
    alerta.innerHTML = "Preencha todos os campos corretamente!";
    return false;
  }

  alerta.style.display = "none";
  return true;
}
