import lists.CustomList;
import lists.Produto;
import lists.Catalogo;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<Produto> catalogo = new ArrayList<>();

        catalogo.add(Catalogo.CreateProduto("Caneta", 20, "Caneta Esferiografica"));
        catalogo.add(Catalogo.CreateProduto("Lapis", 10, "Lapis preto"));
        catalogo.add(Catalogo.CreateProduto("Apontador", 6, "Apontador de metal"));
        catalogo.add(Catalogo.CreateProduto("Borracha", 20, "Borracha giratoria"));
        catalogo.add(Catalogo.CreateProduto("Estojo", 5, "Estojo de couro"));

        System.out.println((catalogo.get(3)).getNome());
    }
}