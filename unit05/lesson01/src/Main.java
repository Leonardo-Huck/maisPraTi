import java.util.Locale;
import java.util.Objects;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

//        byte byteVar = 127;
//        short shortVar = 32000;
//        int intVar = 21000000;
//        long longVar = 9000000000000000000L;
//        float floatVar = 3.14F;
//        double doubleVar = 3.14159265;
//
//        char charVar = 'A';
//
//        boolean booleanVar = true;
//
//        System.out.println("Byte: " + byteVar);
//        System.out.println("Short: " + shortVar);
//        System.out.println("Int: " + intVar);
//        System.out.println("Long: " + longVar);
//        System.out.println("Float: " + floatVar);
//        System.out.println("double: " + doubleVar);
//        System.out.println("Char: " + charVar);
//        System.out.println("Boolean: " + booleanVar);
//        System.out.printf("%.2f\n", floatVar);
//
//        String name = "Leonardo";
//
//        System.out.println(name);
//
//        Locale.setDefault(Locale.US);
//        System.out.printf("%.2f\n", floatVar);
//
//        int a;
//        int b;
//        int c;
//        double area;
//
//        a = 5;
//        b = 7;
//        c = 3;
//
//        area = (double) (a + b) / 2 * c;
//
//        System.out.println(area);
//
//
//        String nome = sc.next();
//        System.out.println("Seu nome é: " + nome);
//
//        int idade = sc.nextInt();
//        System.out.println("Sua idade é: " + idade);
//
//        double ano = sc.nextDouble();
//        System.out.println("O ano é: " + ano);
//
//        char caracter = sc.next().charAt(0);
//        System.out.println("O caracter é: " + caracter);

        // Exercício 01 - Conversão de ºC para ºF

//        System.out.println("--------Conversão de Celsius para Fahrenheit--------");
//        System.out.printf("Informe os graus celsius: ");
//        double celsius = sc.nextDouble();
//
//        double fahrenheit = (celsius * 9 / 5) + 32;
//
//        System.out.println(celsius + "ºC equivalem a " + fahrenheit + "ºF");

        // Exercício 02 - Par ou Impar
//
//        System.out.println("--------Par ou Impar--------");
//        System.out.printf("Informe um número para verificar: ");
//        double numero = sc.nextDouble();
//
//        if (numero % 2 == 0) {
//            System.out.println("O número " + numero + " é PAR!");
//        } else {
//            System.out.println("O número " + numero + " é ÍMPAR!");
//        }

        //Exercício 03 - Verifique se o ano é bissexto!

//        System.out.println("--------Ano Bissexto--------");
//        System.out.printf("Digite um ano: ");
//        int ano = sc.nextInt();
//        boolean bissexto = false;
//
//        if (ano % 4 == 0) {
//            if (ano % 100 == 0) {
//                if (ano % 400 == 0) {
//                    bissexto = true;
//                }
//            } else {
//                bissexto = true;
//            }
//        }
//
//        if (bissexto) {
//            System.out.println(ano + " é um ano bissexto.");
//        } else {
//            System.out.println(ano + " não é um ano bissexto.");
//        }

        // Exercício 04 - Calculadora Simples
//        System.out.println("--------Calculadora Simples--------");
//        System.out.printf("Digite o primeiro número: ");
//        double num1 = sc.nextDouble();
//        System.out.printf("Digite o segundo número: ");
//        double num2 = sc.nextDouble();
//        System.out.printf("Digite o operador: ");
//        char operador = sc.next().charAt(0);
//
//        switch (operador) {
//            case '*':
//                System.out.println("O resultado da multiplicação do número " + num1 + " com o número " + num2 + " é de: " + (num1 * num2));
//                break;
//            case '/':
//                System.out.println("O resultado da divisão do número " + num1 + " com o número " + num2 + " é de: " + (num1 / num2));
//                break;
//            case '+':
//                System.out.println("O resultado da soma do número " + num1 + " com o número " + num2 + " é de: " + (num1 + num2));
//                break;
//            case '-':
//                System.out.println("O resultado da subtração do número " + num1 + " com o número " + num2 + " é de: " + (num1 - num2));
//                break;
//            default:
//                System.out.println("Informe um operador válido");
//        }

        // Exercício 05 - Simule um login básico que permita somente que permita três tentativas de login antes de bloquear o usuário

        System.out.println("--------Calculadora Simples--------");
        String login = "admin";
        String pass = "123456";
        int tentativa = 0;

        while (tentativa != 3) {
            System.out.printf("Digite o usuário: ");
            String user = sc.next();
            System.out.printf("Digite a senha: ");
            String senha = sc.next();

            if (Objects.equals(senha, pass)) {
                break;
            } else {
                tentativa++;
                System.out.println("Seu número de tentativas é " + tentativa);
                System.out.println("O número maximo de erros é 3!");
            }
        }

        if (tentativa == 3) {
            System.out.println("Usuário bloqueado por exceder o número de tentativas!");
        } else {
            System.out.println("Bem Vindo! Meu Peixe!");
        }
    }
}