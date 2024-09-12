package simplyChainedList;

public class ToDo {
        private TaskNode head;

        private static class TaskNode {
            String task;
            boolean isCompleted;
            TaskNode next;

            TaskNode(String task) {
                this.task = task;
                this.isCompleted = false;
                this.next = null;
            }
        }

        public void addTask(String task) {
            TaskNode newNode = new TaskNode(task);
            if (head == null) {
                head = newNode;
            } else {
                TaskNode current = head;
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

            TaskNode current = head;
            while (current.next != null && !current.next.task.equals(task)) {
                current = current.next;
            }

            if (current.next != null) {
                current.next = current.next.next;
            }
        }

        public void markTaskAsCompleted(String task) {
            TaskNode current = head;
            while (current != null) {
                if (current.task.equals(task)) {
                    current.isCompleted = true;
                    return;
                }
                current = current.next;
            }
        }

        public void printTasks() {
            TaskNode current = head;
            while (current != null) {
                System.out.println(current.task + (current.isCompleted ? " (completed)" : ""));
                current = current.next;
            }
        }

        public static void main(String[] args) {
            ToDo manager = new ToDo();
            manager.addTask("Estudar Java");
            manager.addTask("Fazer exercícios");
            manager.addTask("Ler um livro");

            System.out.println("Tarefas:");
            manager.printTasks();

            manager.markTaskAsCompleted("Fazer exercícios");
            System.out.println("\nTarefas após marcar como concluída:");
            manager.printTasks();

            manager.removeTask("Ler um livro");
            System.out.println("\nTarefas após remover:");
            manager.printTasks();
        }
}


