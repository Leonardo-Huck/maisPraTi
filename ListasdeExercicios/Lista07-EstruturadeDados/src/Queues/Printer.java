package Queues;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;

class PrintJob {
    private static int idCounter = 1;
    private int id;
    private String documentName;

    public PrintJob(String documentName) {
        this.id = idCounter++;
        this.documentName = documentName;
    }

    public int getId() {
        return id;
    }

    public String getDocumentName() {
        return documentName;
    }
}

class Printer {
    private Queue<PrintJob> printQueue;

    public Printer() {
        printQueue = new LinkedList<>();
    }

    public void addPrintJob(String documentName) {
        PrintJob job = new PrintJob(documentName);
        printQueue.add(job);
        System.out.println("Impressão " + job.getId() + " (" + job.getDocumentName() + ") adicionada a fila.");
    }

    public void processNextJob() {
        PrintJob job = printQueue.poll();
        if (job != null) {
            System.out.println("Processando impressão " + job.getId() + " (" + job.getDocumentName() + ")");
        } else {
            System.out.println("Sem impressões na fila.");
        }
    }

    public boolean isQueueEmpty() {
        return printQueue.isEmpty();
    }

    public static void main(String[] args) {
        Printer printer = new Printer();
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            printer.addPrintJob("Documento " + (i + 1));

            try {
                Thread.sleep(random.nextInt(3000));
            } catch (InterruptedException e) {
                System.err.println("Erro: " + e.getMessage());
            }
        }

        while (!printer.isQueueEmpty()) {
            printer.processNextJob();
            try {
                Thread.sleep(random.nextInt(3000));
            } catch (InterruptedException e) {
                System.err.println("Erro: " + e.getMessage());
            }
        }
    }
}
