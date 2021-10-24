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


// Segundo exercicio do Rush00
function rush01() {

    let x = parseInt(document.getElementById("row1").value);
    let y = parseInt(document.getElementById("col1").value);
    let resposta = document.getElementById("mostrar_grid1");
    let grid1 = "";

    var tf = "/";
    var tt = "\\";
    var estrela = "*";
    var espaço = "&nbsp";

    var a = 0;
    var b = 0;

    while (a < y)
    {
        b = 0;
        while (b < x)
        {
            // 1/
            if (a == 0 && b == 0) 
                grid1 = grid1 + tf;             
            
            // 2\
            else if (a == 0 && b == (x - 1))
                grid1 = grid1 + tt + "<br />"; 
            
            // 3\
            else if (a == (y - 1) && b == 0) 
                grid1 = grid1 + tt;
            
            // 4/
            else if (a == (y - 1) && b == (x - 1))         
                grid1 = grid1 + tf + "<br />";

            // * de cima e baixo
            else if ((a == 0 && b > 0 && b != (x - 1))                
            || (a == (y - 1) && b > 0 && b != (x - 1)))     
                grid1 = grid1 + estrela;

            // * da esquerda
            else if (a > 0 && b == 0)                              
                grid1 = grid1 + estrela;
            
            // * da direita
            else if (a > 0 && b == (x - 1))
                grid1 = grid1 + estrela + "<br />";
        
            // espaço no meio
            else
                grid1 = grid1 + espaço;
            b++;
        }
        a++;
    }
    console.log(grid1);
    resposta.innerHTML = grid1;
}

