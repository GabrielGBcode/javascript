// NÃO FINALIZADO!!

let lista = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

let letras = [
  (a = 1),
  (b = 2),
  (c = 3),
  (d = 4),
  (e = 5),
  (f = 6),
  (g = 7),
  (h = 8),
  (i = 9),
  (j = 10),
  (k = 11),
  (l = 12),
  (m = 13),
  (n = 14),
  (o = 15),
  (p = 16),
  (q = 17),
  (r = 18),
  (s = 19),
  (t = 20),
  (u = 21),
  (v = 22),
  (w = 23),
  (x = 24),
  (y = 25),
  (z = 26),
];
function find(letra) {
  var car = "";

  while (car != letra) {
    var lIni = letras.indexOf(letra);
    if (lista.length % 2 == 0 /* PAR */) {
      var num = lista.length / 2 - 1;
      var car = lista[num];
      if (car == letra) {
        return `O caractere desejado está na posição ${num + 1}.`;
      }
      console.log(car);
    } else if (lista.length % 2 == 1 /* IMPAR */) {
      // Algo
    } else {
      return console.error("Sei não mané! Deu algo errado aí.");
    }
  }
}

console.log(find(e));

// NÃO FINALIZADO!!
