package simplyChainedList;

public class ToDo {
        private Node head;

        private static class Node {
            String task;
            boolean isCompleted;
            Node next;

            Node(String task) {
                this.task = task;
                this.isCompleted = false;
                this.next = null;
            }
        }

        public void addTask(String task) {
            Node newNode = new Node(task);
            if (head == null) {
                head = newNode;
            } else {
                Node current = head;
                while (current.next != null) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }

        public void removeTask(String task) {
            if (head == null) return;

            if (head.task.equals(task)) {
                head = head.next;
                return;
            }

            Node current = head;
            while (current.next != null && !current.next.task.equals(task)) {
                current = current.next;
            }

            if (current.next != null) {
                current.next = current.next.next;
            }
        }

        public void markTaskAsCompleted(String task) {
            Node current = head;
            while (current != null) {
                if (current.task.equals(task)) {
                    current.isCompleted = true;
                    return;
                }
                current = current.next;
            }
        }

        public void printTasks() {
            Node current = head;
            while (current != null) {
                System.out.println(current.task + (current.isCompleted ? " (completed)" : ""));
                current = current.next;
            }
        }

        public static void main(String[] args) {
            ToDo manager = new ToDo();
            manager.addTask("Lavar a louça");
            manager.addTask("Varrer a varanda");
            manager.addTask("Estudar para a prova");

            System.out.println("Tarefas:");
            manager.printTasks();

            manager.markTaskAsCompleted("Varrer a varanda");
            System.out.println("\nTarefas após marcar como concluída:");
            manager.printTasks();

            manager.removeTask("Estudar para a prova");
            System.out.println("\nTarefas após remover:");
            manager.printTasks();
        }
}


