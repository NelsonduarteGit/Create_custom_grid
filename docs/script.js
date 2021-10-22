function rush00() {

    let x = parseInt(document.getElementById("row").value);
    let y = parseInt(document.getElementById("col").value);
    let resposta = document.getElementById("mostrar_grid");
    let grid = "";

    var bola = "O";
    var traço = "-";
    var barra = "|";
    var espaço = "&nbsp";

    // codigo para a grid
    var a = 0;
    var b = 0;
    while (a < y)
    {
        b = 0;
        while (b < x)
        {
            // 10 30 40
            if ((a == 0 && b == 0)                    
            || (a == (y - 1) && b == 0)             
            || (a == (y - 1) && b == (x - 1)))    
                grid = grid + bola;
            
            // 20    
            else if (a == 0 && b == (x - 1))            
                grid = grid + bola + "<br />";
            
            // - de cima, - de baixo 
            else if ((a == 0 && b > 0 && b != (x - 1))        
            || (a == (y - 1) && b > 0 && b != (x - 1)))     
                grid = grid + traço;
            
            // | da esquerda
            else if (a > 0 && b == 0)        
                grid = grid + barra;
            else if (a > 0 && b == (x - 1))
                grid = grid + barra + "<br />";
            
            // espaço no meio
            else
                grid = grid + espaço;
            b++;
        }
        a++;
    }
    console.log(grid);
    resposta.innerHTML = grid;
}
