package abstraction;

import java.util.ArrayList;
import java.util.Date;

public class ContaBancaria {
    private String numeroConta;
    private double saldo;
    private String titular;
    private double limiteSaqueDiario;
    private ArrayList<String> historicoTransacao;

    public ContaBancaria(String numeroConta, String titular, double limiteSaqueDiario) {
        this.numeroConta = numeroConta;
        this.saldo = 0.0;
        this.titular = titular;
        this.limiteSaqueDiario = limiteSaqueDiario;
        this.historicoTransacao = new ArrayList<>();
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(String numeroConta) {
        this.numeroConta = numeroConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public double getLimiteSaqueDiario() {
        return limiteSaqueDiario;
    }

    public void setLimiteSaqueDiario(double limiteSaqueDiario) {
        this.limiteSaqueDiario = limiteSaqueDiario;
    }

    public void depositar(double valor){
        if (valor <= 0){
            throw new IllegalArgumentException("O valor depositado deve ser maior do que 0");
        }

        //double novoSaldo = (getSaldo() + valor);
        //setSaldo(novoSaldo);
        this.saldo += valor;
        this.registrarTransacao("Deposito de: " + valor);
    }

    public void sacar(double valor) throws Exception{
        if (valor <= 0){
            throw new IllegalArgumentException("O valor a sacar deve ser maior do que 0");
        }
        if (valor > this.saldo){
            throw new Exception("Não há saldo suficiente para o saque");
        }
        if (valor > this.limiteSaqueDiario){
            throw new Exception("Valor a sacar excede o limite de saque diário");
        }

        this.saldo -= valor;
        this.registrarTransacao("Saque de: "+ valor);
    }

    public void transferir(double valor, ContaBancaria contaDestino) throws Exception{
        if (valor <= 0){
            throw new IllegalArgumentException("O valor a transferir deve ser maior do que 0");
        }
        if (valor > this.saldo){
            throw new Exception("Não há saldo suficiente para a transferência");
        }

        this.saldo -= valor;
        contaDestino.depositar(valor);
        this.registrarTransacao("Transferencia de: " + valor + " para a conta " + contaDestino.getNumeroConta());
    }

    public void exibirExtrato(){
        System.out.println("Extrato da conta: " + this.getNumeroConta());
        for (String transacao : historicoTransacao){
            System.out.println(transacao);
        }
        System.out.println("Saldo atual: " + this.getSaldo());
    }

    private void registrarTransacao(String descricao){
        Date date = new Date();
        historicoTransacao.add(date + ": " + descricao);
    }

}
