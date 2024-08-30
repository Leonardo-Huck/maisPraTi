package abstraction;

public class Pessoa {
    String nome;
    String cpf;
    String nascimento;
    double altura;
    double peso;
    int idade;
    char genero;

    void caminha(){
        System.out.println("Estou caminhando!");
    }

    void desenvolveSe(){
        System.out.println("Estou crescendo!");
    }

    void estuda(){
        System.out.println("Estou estudando!");
    }

    void programa(){
        System.out.println("Estou programando");
    }

    public static void main(String[] args) {
        Pessoa minhaPessoa = new Pessoa();

        minhaPessoa.nome = "João";
        minhaPessoa.altura = 1.60;
        System.out.println(minhaPessoa.nome);
        System.out.println(minhaPessoa.altura);

        Pessoa segundaPessoa = new Pessoa();

        segundaPessoa.nome = "Maria";
        segundaPessoa.altura = 1.60;
        System.out.println(segundaPessoa.nome);
        System.out.println(segundaPessoa.altura);
    }
}
