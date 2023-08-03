let lista = [0, 2, 3, 5, 1, 8, 9, 4, 7, 6];

function pop(array) {
  while (array.length != []) {
    if (array.length % 2 == 1) {
      if (array.length == 1) {
        var num = 0;

        console.log(array[num]);
        array.splice(num, 1);
      } else {
        var num = (array.length - 1) / 2;

        console.log(array[num]);
        array.splice(num, 1);
      }
    } else if (array.length % 2 == 0) {
      var num = array.length / 2;

      console.log(array[num]);
      array.splice(num, 1);
    }
  }
  return "GAME OVER";
}

console.log(pop(lista));
