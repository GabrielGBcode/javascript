function verify() {
  let data = new Date();
  let ano = data.getFullYear();
  let formAno = window.document.querySelector("input#iano");

  let msg = window.document.querySelector("div#res");
  if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert("Selecione uma data válida. 1 - 2023");
  } else {
    let idade = Number(ano) - Number(formAno.value);
    let sexo = window.document.getElementsByName("sexo");
    let genero = "";
    let img = window.document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 4) {
        // Bebê
        img.setAttribute("src", "imagens/masBb.jpg");
      } else if (idade < 16) {
        // Criança
        img.setAttribute("src", "imagens/masCr.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "imagens/masJv.jpg");
      } else if (idade < 60) {
        // Adulto
        img.setAttribute("src", "imagens/masAd.jpg");
      } else {
        // Velho
        img.setAttribute("src", "imagens/masId.jpg");
      }
    } else if (sexo[1]) {
      genero = "Mulher";
      if (idade >= 0 && idade < 4) {
        // Bebê
        img.setAttribute("src", "imagens/femBb.jpg");
      } else if (idade < 16) {
        // Criança
        img.setAttribute("src", "imagens/femCr.jpg");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "imagens/femJv.jpg");
      } else if (idade < 60) {
        // Adulto
        img.setAttribute("src", "imagens/femAd.jpg");
      } else {
        // Velho
        img.setAttribute("src", "imagens/femId.jpg");
      }
    } else {
      window.alert("Algo deu errado!");
    }
    msg.style.textAling = "center";
    msg.innerHTML = `Detectamos: ${genero} com ${idade} anos. <br>`;
    msg.appendChild(img);
  }
  // if (idade == 0) {
  //   msg.innerHTML = `Opa, me parece que você não completou nem um ano de idade ainda...`;
  // } else if (idade == 1) {
  //   msg.innerHTML = `Você tem ${idade} ano.`;
  // } else {
  //   msg.innerHTML = `Você tem ${idade} anos.`;
  // }
  //   msg.innerHTML += `<img src="imagens/femAd.jpg" alt="">`;
}
