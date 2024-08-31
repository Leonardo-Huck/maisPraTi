import abstraction.ContaBancaria;

public class Main {
    public static void main(String[] args) {

        try {
            ContaBancaria contaJose = new ContaBancaria("1234", "Jose da Silva", 1000);
            ContaBancaria contaJoao = new ContaBancaria("5678", "João Pereira", 2000);

            contaJose.depositar(1000);
            contaJose.sacar(800);

            contaJose.transferir(100, contaJoao);

            contaJose.exibirExtrato();
            contaJoao.exibirExtrato();
        }catch (Exception error){
            System.out.println(error.getMessage());
        }
    }
}