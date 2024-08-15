import java.util.Arrays;
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

//        System.out.println("--------Calculadora Simples--------");
//        String login = "admin";
//        String pass = "123456";
//        int tentativa = 0;
//
//        while (tentativa != 3) {
//            System.out.printf("Digite o usuário: ");
//            String user = sc.next();
//            System.out.printf("Digite a senha: ");
//            String senha = sc.next();
//
//            if (Objects.equals(senha, pass)) {
//            break;
//        } else {
//            tentativa++;
//            System.out.println("Seu número de tentativas é " + tentativa);
//            System.out.println("O número maximo de erros é 3!");
//        }
//    }
//
//        if (tentativa == 3) {
//        System.out.println("Usuário bloqueado por exceder o número de tentativas!");
//    } else {
//        System.out.println("Bem Vindo! Meu Peixe!");
//    }
        //Exercício 06 - Fatorial de um número

//        System.out.println("--------Fatorial de um número--------");
//        System.out.printf("Digite um número para exibir o fatorial: ");
//        int num = sc.nextInt();
//        int total = 1;
//
//        System.out.printf(num + "! = ");
//
//        for (int i = num; i > 0; i--) {
//            if (i == 1) {
//                System.out.printf(String.valueOf(i));
//                break;
//            }
//            System.out.printf(i + " * ");
//            total *= i;
//        }
//
//        System.out.printf(" = " + total);

        //Exercício 07- Fibonacci

//        System.out.println("--------Fibonacci--------");
//        int atual = 1;
//        int anterior = 0;
//
//        System.out.printf(anterior + " , ");
//
//        for (int i = 0; i <= 10; i++) {
//            System.out.printf(atual + " , ");
//            atual = atual + anterior;
//            anterior = atual - anterior;
//        }

        // Estruturas de repetição: For
        for (int i = 0; i < 10; i++) { // Loop de 0 a 9 (10 iterações).
            System.out.println("Valor de i é: " + i); // Imprime o valor atual de i.
        }

        // Estruturas de repetição: While
        int i = 0; // Inicializa a variável i.
        while (i < 10) { // Loop enquanto i for menor que 10.
            System.out.println("Valor de i é: " + i); // Imprime o valor atual de i.
            i++; // Incrementa i.
        }

        // Estruturas de repetição: Do-While
        i = 0; // Reinicializa a variável i.
        do {
            System.out.println("Valor de i é: " + i); // Imprime o valor atual de i.
            i++; // Incrementa i.
        } while (i < 10); // Executa o loop enquanto i for menor que 10.

        // Manipulação de Strings
//        String texto = "Java é melhor que aquela linguagem"; // Declara uma String.
//        int comprimento = texto.length(); // Obtém o comprimento da String.
//        System.out.println(comprimento); // Imprime o comprimento.
//        String maiusculas = texto.toUpperCase(); // Converte a String para maiúsculas.
//        System.out.println(maiusculas); // Imprime a String em maiúsculas.
//        String minusculas = texto.toLowerCase(); // Converte a String para minúsculas.
//        System.out.println(minusculas); // Imprime a String em minúsculas.
//        boolean contem = texto.contains("java"); // Verifica se a String contém "java".
//        System.out.println(contem); // Imprime se contém.
//        String substituto = texto.replace("Java", "Python"); // Substitui "Java" por "Python".
//        System.out.println(substituto); // Imprime a String modificada.
//        String substring = texto.substring(0, 4); // Obtém uma substring dos primeiros 4 caracteres.
//        System.out.println(substring); // Imprime a substring.
//
//        // Funções matemáticas
//        double num = 50.30; // Declara uma variável double.
//        double arredondado = Math.round(num); // Arredonda o número para o inteiro mais próximo.
//        System.out.println(arredondado); // Imprime o valor arredondado.
//        double arredondadoPraCima = Math.ceil(num); // Arredonda o número para cima.
//        System.out.println(arredondadoPraCima); // Imprime o valor arredondado para cima.
//        double arredondadoPraBaixo = Math.floor(num); // Arredonda o número para baixo.
//        System.out.println(arredondadoPraBaixo); // Imprime o valor arredondado para baixo.
//        double raizQuadrada = Math.sqrt(num); // Calcula a raiz quadrada do número.
//        System.out.println(raizQuadrada); // Imprime a raiz quadrada.
//        double absoluto = Math.abs(num); // Obtém o valor absoluto do número.
//        System.out.println(absoluto); // Imprime o valor absoluto.
//        double aleatorio = Math.random(); // Gera um número aleatório entre 0.0 e 1.0.
//        System.out.println(aleatorio); // Imprime o número aleatório.

        int tamanho = 6;
        int[] vetor = new int[tamanho];

        vetor[0] = 10;
        vetor[1] = 20;
        vetor[2] = 30;
        vetor[3] = 40;
        vetor[4] = 100;

        // Exercício 08 - Inversão de um array

        int[] vetorInverso = new int[5];
        int interador = 0;
        for (int i = vetor.length - 1; i >= 0; i--) {
            vetorInverso[interador] = vetor[i];
            interador++;
        }
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = vetorInverso[i];
        }
        for (int i = 0; i < vetor.length; i++) {
            System.out.println(vetor[i]);
        }

        //Exercício 09 - Adicionar elementos ao array
        vetor[5] = 200;

        //Exercício 10 - Excluir elementos de um array
        //Exercício 11 - Pesquisar elementos em um array
    }
}