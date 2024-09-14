package simplyChainedList;

class Node {
    String url;
    Node next;

    Node(String url) {
        this.url = url;
        this.next = null;
    }
}

class BrowserHistory {
    private Node head;
    private Node tail;
    private int size;
    private int maxSize;

    BrowserHistory(int maxSize) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    public void visit(String url) {
        Node newNode = new Node(url);
        if (size == maxSize) {
            head = head.next;
            size--;
        }
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        size++;
    }

    public void printHistory() {
        Node current = head;
        while (current != null) {
            System.out.println(current.url);
            current = current.next;
        }
    }

    public static void main(String[] args) {
        BrowserHistory history = new BrowserHistory(5);
        history.visit("https://www.google.com");
        history.visit("https://www.gmail.com");
        history.visit("https://www.youtube.com");
        history.visit("https://www.facebook.com");
        history.visit("https://maisprati.trindtech.com.br/plataforma/home");
        history.visit("https://classroom.google.com/");

        history.printHistory();
    }
}
