#include <unistd.h>

char    ft_putchar(char c)
{
    write(1, &c, 1);
}

void conditions(int row, int col, int a, int b)
{
    if (a == 0 && b == 0) 
                ft_putchar('/');                       // 1o
    else if (a == 0 && b == (row - 1))
                ft_putchar('\\');                      // 2o
    else if (a == (col - 1) && b == 0) 
                ft_putchar('\\');                      // 3o 
    else if (a == (col - 1) && b == (row - 1))         // 4o
                ft_putchar('/');
    else if ((a == 0 && b > 0 && b != (row - 1))                // * de cima
            || (a == (col - 1) && b > 0 && b != (row - 1)))     // * de baixo
                ft_putchar('*');
    else if ((a > 0 && b == 0 && a != (row - 1))                // * da esquerda
            || (a > 0 && b == (row - 1)))                       // * da direita
                ft_putchar('*');
    else
                ft_putchar(' ');  
}

void    rush(int row, int col)
{
    int a;
    int b;

    a = 0;
    b = 0;
    while (a < col)
    {
        b = 0;
        while (b < row)
        {
            conditions(row, col, a, b);  
            b++;
        }
        ft_putchar('\n');
        a++;
    }
}

int main()
{
    rush(5, 5);     // col, row
    return (0);
}