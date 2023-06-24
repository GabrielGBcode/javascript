let agora = new Date();
let hora = agora.getHours();

if (hora < 6) {
  console.log(`São ${hora}. Boa Madrugada!`);
} else if (hora < 12) {
  console.log(`São ${hora}. Bom Dia!`);
} else if (hora < 18) {
  console.log(`São ${hora}. Boa Tarde!`);
} else {
  console.log(`São ${hora}. Boa Noite!`);
}
