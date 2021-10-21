function rush00() {

    let x = parseInt(document.getElementById("row").value);
    let y = parseInt(document.getElementById("col").value);
    let resposta = document.getElementById("mostrar_grid");
    let grid = "";

    var bola = "O";
    var traço = "-";
    var barra = "|";
    var espaço = " ";

    // codigo para a grid
    let b;
    for (let a = 0; a < x; a++) {
    b = 0;
    for (let b = 0; b < y; b++) {
      // 1O 2O 3O 4O
      if (
        (a == 0 && b == 0) ||
        (a == 0 && b == x - 1) ||
        (a == y - 1 && b == 0) ||
        (a == y - 1 && b == x - 1)
      )
        grid = grid + bola + "\n";
    
      // - de cima, - de baixo
      else if (
        (a == 0 && b > 0 && b != x - 1) ||
        (a == y - 1 && b > 0 && b != x - 1)
      )
        grid = grid + traço;
      // | da esquerda, | da direita
      else if ((a > 0 && b == 0 && a != x - 1) || (a > 0 && b == x - 1))
        grid = grid + barra;
      // parte de dentro da grid
      else grid = grid + espaço;
    }
}
    console.log(grid);
    resposta.innerHTML = grid;
}