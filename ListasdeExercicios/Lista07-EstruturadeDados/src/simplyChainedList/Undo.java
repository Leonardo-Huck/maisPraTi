package simplyChainedList;

class ActionNode {
    String action;
    ActionNode next;

    ActionNode(String action) {
        this.action = action;
        this.next = null;
    }
}

class Undo {
    private ActionNode head;
    private int size;

    Undo() {
        this.head = null;
        this.size = 0;
    }

    public void action(String action) {
        ActionNode newNode = new ActionNode(action);
        newNode.next = head;
        head = newNode;
        size++;
    }

    public String undoAction() {
        if (head == null) {
            return "Sem ações para desfazer";
        }
        String action = head.action;
        head = head.next;
        size--;
        return "Ação desfeita: " + action;
    }

    public void printActions() {
        ActionNode current = head;
        while (current != null) {
            System.out.println(current.action);
            current = current.next;
        }
    }

    public static void main(String[] args) {
        Undo undo = new Undo();
        undo.action("Olá Jaques!");
        undo.action("Boa Tarde");
        undo.action("Como vai?");

        System.out.println("Ações:");
        undo.printActions();

        System.out.println("\n" + undo.undoAction());
        System.out.println("\nAções após desfazer:");
        undo.printActions();
    }
}

