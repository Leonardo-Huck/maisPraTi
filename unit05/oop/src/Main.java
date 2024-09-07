import abstraction.ContaBancaria;
import encapsulation.BankAccount;
import encapsulation.BankTransaction;

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", 1000);

        BankTransaction depositTransaction = new BankTransaction(account, 15000, BankTransaction.TransactionType.DEPOSIT);
        depositTransaction.execute();

        System.out.println(depositTransaction.getDetails());


//        try {
//            ContaBancaria contaJose = new ContaBancaria("1234", "Jose da Silva", 1000);
//            ContaBancaria contaJoao = new ContaBancaria("5678", "João Pereira", 2000);
//
//            contaJose.depositar(1000);
//            contaJose.sacar(800);
//
//            contaJose.transferir(100, contaJoao);
//
//            contaJose.exibirExtrato();
//            contaJoao.exibirExtrato();
//        }catch (Exception error){
//            System.out.println(error.getMessage());
//        }
    }
}