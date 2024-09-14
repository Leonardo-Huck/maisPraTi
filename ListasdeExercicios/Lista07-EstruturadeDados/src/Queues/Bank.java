package Queues;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

class Customer {
    private static int idCounter = 1;
    private int id;

    public Customer() {
        this.id = idCounter++;
    }

    public int getId() {
        return id;
    }
}

class Bank {
    private Queue<Customer> queue;

    public Bank() {
        queue = new LinkedList<>();
    }

    public void addCustomer() {
        Customer customer = new Customer();
        queue.add(customer);
        System.out.println("Cliente n°" + customer.getId() + " entrou na fila.");
    }

    public void serveCustomer() {
        Customer customer = queue.poll();
        if (customer != null) {
            System.out.println("Atendendo cliente n° " + customer.getId());
        } else {
            System.out.println("Sem clientes na fila.");
        }
    }

    public boolean isQueueEmpty() {
        return queue.isEmpty();
    }

    public static void main(String[] args) {
        Bank bank = new Bank();
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            bank.addCustomer();
            try {
                Thread.sleep(random.nextInt(3000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        while (!bank.isQueueEmpty()) {
            bank.serveCustomer();
            try {
                Thread.sleep(random.nextInt(3000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
