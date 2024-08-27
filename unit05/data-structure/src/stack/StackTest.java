package stack;

import java.util.Stack;

public class StackTest {
    public static void main(String[] args) {
        Stack<Character> stack = new Stack<>();

        String entrada = "Leonardo";


        for (int i = 0; i < entrada.length(); i++) {
            stack.push(entrada.charAt(i));
        }
        
        while (!stack.isEmpty()) {
            System.out.println("Elemento desempilhado: " + stack.pop());
        }
    }
}
