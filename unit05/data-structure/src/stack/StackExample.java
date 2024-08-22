package stack;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class StackExample {
    private Node top;

    public StackExample() {
        this.top = null;
    }

    public void push(int data) {
        Node newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    public void pop() {
        Node data = this.top.next;
        this.top = data;
    }
}
