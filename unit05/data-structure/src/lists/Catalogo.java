package lists;

import lists.Produto;

public class Catalogo {

    public static Produto CreateProduto(String nome, int quantidade, String descricao) {
        Produto produto = new Produto(nome, quantidade, descricao);

        return produto;
    }
}
