package stack;

public class StackOverflowExemple {
    public static void recursiveCall() {
        System.out.println("Chamando recursivamente");
        recursiveCall();
    }

    public static void main(String[] args) {
        try {
            recursiveCall();
        } catch (StackOverflowError error) {
            System.out.println("StackOverflow detectado!" + error);
        }
    }
}
