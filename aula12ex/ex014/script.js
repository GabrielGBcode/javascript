function carregar() {
  let msg = window.document.querySelector("div#msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  let min = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${(min < 10 ? "0" : "") + min}`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "imagens/ftmanha.png";
    window.document.body.style.background = "#dab89d";
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    img.src = "imagens/fttarde.png";
    window.document.body.style.background = "#fd6a02";
  } else {
    // BOA NOITE
    img.src = "imagens/ftnoite.png";
    window.document.body.style.background = "#262b2c";
  }
}
