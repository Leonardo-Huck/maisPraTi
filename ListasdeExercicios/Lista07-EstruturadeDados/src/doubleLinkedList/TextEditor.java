package doubleLinkedList;

class Node {
    String text;
    Node prev;
    Node next;

    Node(String text) {
        this.text = text;
        this.prev = null;
        this.next = null;
    }
}

class RedoNode {
    Node node;
    RedoNode next;

    RedoNode(Node node) {
        this.node = node;
        this.next = null;
    }
}

class TextEditor {
    private Node current;
    private Node head;
    private Node tail;
    private RedoNode redoHead;

    TextEditor() {
        this.current = null;
        this.head = null;
        this.tail = null;
        this.redoHead = null;
    }

    public void write(String text) {
        Node newNode = new Node(text);
        if (current == null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.prev = current;
            current.next = newNode;
            tail = newNode;
        }
        current = newNode;
        redoHead = null;
    }

    public String undo() {
        if (current == null) {
            return "Sem ações para desfazer";
        }
        String text = current.text;
        addRedoNode(current);
        current = current.prev;
        if (current != null) {
            current.next = null;
        } else {
            head = null;
            tail = null;
        }
        return "Ação desfeita: " + text;
    }

    private void addRedoNode(Node node) {
        RedoNode newRedoNode = new RedoNode(node);
        newRedoNode.next = redoHead;
        redoHead = newRedoNode;
    }

    public String redo() {
        if (redoHead == null) {
            return "Nenhuma ação para refazer";
        }
        Node redoNode = redoHead.node;
        redoHead = redoHead.next;
        if (current == null) {
            head = redoNode;
            tail = redoNode;
        } else {
            current.next = redoNode;
            redoNode.prev = current;
            tail = redoNode;
        }
        current = redoNode;
        return "Ação refeita: " + current.text;
    }

    public void printText() {
        Node text = head;
        while (text != null) {
            System.out.print(text.text + " ");
            text = text.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        editor.write("As metodologias consideradas ágeis, assim como Scrum,");
        editor.write("são fortemente influenciadas pelas práticas da indústria japonesa,");
        editor.write("como as adotadas pelas empresas");
        editor.write("Toyota e Honda");

        System.out.println("Texto:");
        editor.printText();

        System.out.println("\n" + editor.undo());
        System.out.println("\n" + editor.undo());
        System.out.println("\nTexto após desfazer:");
        editor.printText();

        System.out.println("\n" + editor.redo());
        System.out.println("Texto após refazer:");
        editor.printText();

        System.out.println("\n" + editor.redo());
        System.out.println("Texto após refazer:");
        editor.printText();
    }
}
