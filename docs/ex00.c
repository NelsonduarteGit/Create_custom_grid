#include <unistd.h>

char    ft_putchar(char c)
{
    write(1, &c, 1);
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
            if ((a == 0 && b == 0)                    // 1o
            || (a == 0 && b == (row - 1))             // 2o
            || (a == (col - 1) && b == 0)             // 3o 
            || (a == (col - 1) && b == (row - 1)))    // 4o
                ft_putchar('o');
            else if ((a == 0 && b > 0 && b != (row - 1))        // - de cima
            || (a == (col - 1) && b > 0 && b != (row - 1)))     // - de baixo
                ft_putchar('-');
            else if ((a > 0 && b == 0 && a != (row - 1))        // | da esquerda
            || (a > 0 && b == (row - 1)))                       // | da direita
                ft_putchar('|');
            else if (col > 4 && row > 4)
                if (a == ((col - 1) / 2) && b == ((row - 1) / 2))
                    ft_putchar('&');
            else
                ft_putchar(' ');
            b++;
        }
        ft_putchar('\n');
        a++;
    }
}

int main()
{
    rush(10, 10);     // col, row
    return (0);
}