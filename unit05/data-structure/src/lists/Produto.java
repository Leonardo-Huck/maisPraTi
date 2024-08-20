package lists;

public class Produto {
    private String nome;
    private int quantidade;
    private String descricao;


    public Produto(String nome, int quantidade, String descricao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.descricao = descricao;
    }

    public String getNome() {
        return this.nome;
    }

    public int getQuantidade() {
        return this.quantidade;
    }

    public String getDescricao() {
        return this.descricao;
    }
}
