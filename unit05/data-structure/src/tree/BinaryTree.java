package tree;

class Node {
    int value;
    Node left;
    Node right;

    public Node(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root;

    public BinaryTree() {
        this.root = null;
    }

    public void add(int value) {
        this.root = addRecursive(this.root, value);
    }

    private Node addRecursive(Node current, int value) {
        if (current == null) {
            return new Node(value);
        }
        if (value < current.value) {
            current.left = addRecursive(current.left, value);
        } else if (value > current.value) {
            current.right = addRecursive(current.right, value);
        }
        return current;
    }

    public void ordenedPrint(Node current) {
        if (current != null) {
            ordenedPrint(current.left);
            System.out.println(current.value);
            ordenedPrint(current.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();

        binaryTree.add(10);
        binaryTree.add(11);
        binaryTree.add(9);
        binaryTree.add(8);
        binaryTree.add(20);
        binaryTree.add(15);
        binaryTree.add(22);

        binaryTree.ordenedPrint(binaryTree.root);
    }
}
