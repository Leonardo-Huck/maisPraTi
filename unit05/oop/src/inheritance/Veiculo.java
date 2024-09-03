package inheritance;

public class Veiculo {
    public String modelo;
    public String fabricante;
    public String tipo;
    public String categoria;
    public String anoFabricacao;
    public int capacidade;
    public double potencia;
    private String nrChassi;

    public Veiculo(String modelo, String tipo, String fabricante, String anoFabricacao, String categoria, int capacidade, String nrChassi, double potencia) {
        this.modelo = modelo;
        this.tipo = tipo;
        this.fabricante = fabricante;
        this.anoFabricacao = anoFabricacao;
        this.categoria = categoria;
        this.capacidade = capacidade;
        this.nrChassi = nrChassi;
        this.potencia = potencia;
    }

    void Ligar(){
        System.out.println("O veículo está ligado!");
    }
    void acelerar(){
        System.out.println("Estou acelerando!");
    }
}
