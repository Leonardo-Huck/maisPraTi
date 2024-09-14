package Queues;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

class Process {
    private static int idCounter = 1;
    private int id;
    private String name;

    public Process(String name) {
        this.id = idCounter++;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

class ProcessScheduler {
    private Queue<Process> readyQueue;

    public ProcessScheduler() {
        readyQueue = new LinkedList<>();
    }

    public void addProcess(String name) {
        Process process = new Process(name);
        readyQueue.add(process);
        System.out.println("Processo nº" + process.getId() + " (" + process.getName() + ") adicionado a fila.");
    }

    public void executeNextProcess() {
        Process process = readyQueue.poll();
        if (process != null) {
            System.out.println("Executando processo nº" + process.getId() + " (" + process.getName() + ")");
        } else {
            System.out.println("Sem processos na fila.");
        }
    }

    public boolean isQueueEmpty() {
        return readyQueue.isEmpty();
    }

    public static void main(String[] args) {
        ProcessScheduler scheduler = new ProcessScheduler();
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            scheduler.addProcess("Processo " + (i + 1));
            try {
                Thread.sleep(random.nextInt(3000));
            } catch (InterruptedException e) {
                System.err.println("Erro: " + e.getMessage());
            }
        }

        while (!scheduler.isQueueEmpty()) {
            scheduler.executeNextProcess();
            try {
                Thread.sleep(random.nextInt(3000));
            } catch (InterruptedException e) {
                System.err.println("Erro: " + e.getMessage());
            }
        }
    }
}
