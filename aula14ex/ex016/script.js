const ini = window.document.querySelector("input#iini");
const fim = window.document.querySelector("input#ifim");
const pas = window.document.querySelector("input#ipas");

function contar() {
  let ini_f = Number(ini.value);
  let fim_f = Number(fim.value);
  let pas_f = Number(pas.value);
  let res = window.document.querySelector("div#res");
  if (pas_f <= 0) {
    window.alert("Passo Inválido! Considerando PASSO 1");
    pas_f = 1;
  }
  res.innerHTML = "";
  if (ini_f < fim_f) {
    res.innerHTML = "Contando... <br>";
    for (let count = ini_f; count <= fim_f; count += pas_f) {
      res.innerHTML += ` ${count} \u{1F449}`;
    }
  } else {
    for (let count = ini_f; count >= fim_f; count -= pas_f) {
      res.innerHTML += ` ${count} \u{1F449}`;
    }
  }
  res.innerHTML += `\u{1F3C1}`;
}
