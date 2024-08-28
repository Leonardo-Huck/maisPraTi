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

    public void remove(int value) {
        this.root = removeRecursive(this.root, value);
    }

    private Node removeRecursive(Node current, int value) {
        if (current == null) { // Se o nó atual for nulo, retorna nulo.
            return null;
        }

        if (value < current.value) { // Se o valor for menor que o valor do nó atual, busca na subárvore esquerda.
            current.left = removeRecursive(current.left, value);
        } else if (value > current.value) { // Se o valor for maior, busca na subárvore direita.
            current.right = removeRecursive(current.right, value);
        } else { // Se o valor for igual ao valor do nó atual, esse é o nó que deve ser removido.
            if (current.left == null && current.right == null) { // Caso o nó não tenha filhos, basta removê-lo.
                return null;
            }

            if (current.left == null) { // Se o nó não tiver filho à esquerda, retorna o filho à direita.
                return current.right;
            }

            if (current.right == null) { // Se o nó não tiver filho à direita, retorna o filho à esquerda.
                return current.left;
            }

            // Se o nó tiver dois filhos, encontra o menor valor na subárvore direita.
            int smallestValue = findSmallestValue(current.right);

            current.value = smallestValue; // Substitui o valor do nó atual pelo menor valor.

            // Remove o menor valor da subárvore direita.
            current.right = removeRecursive(current.right, smallestValue);
        }

        return current; // Retorna o nó atual após a remoção.
    }

    // Método para encontrar o menor valor na subárvore, usado na remoção.
    private int findSmallestValue(Node root) {
        return root.left == null ? root.value : findSmallestValue(root.left); // Busca o valor mais à esquerda.
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
