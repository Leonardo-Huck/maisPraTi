package doubleLinkedList;

class Card {
    String name;
    Card prev;
    Card next;

    Card(String name) {
        this.name = name;
        this.prev = null;
        this.next = null;
    }
}

class Hand {
    private Card head;
    private Card tail;

    Hand() {
        this.head = null;
        this.tail = null;
    }

    public void addCard(String name) {
        Card newCard = new Card(name);
        if (head == null) {
            head = newCard;
            tail = newCard;
        } else {
            tail.next = newCard;
            newCard.prev = tail;
            tail = newCard;
        }
    }

    public void removeCard(String name) {
        Card current = head;
        while (current != null) {
            if (current.name.equals(name)) {
                if (current.prev != null) {
                    current.prev.next = current.next;
                } else {
                    head = current.next;
                }
                if (current.next != null) {
                    current.next.prev = current.prev;
                } else {
                    tail = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    public void moveCardToFront(String name) {
        Card current = head;
        while (current != null) {
            if (current.name.equals(name)) {
                if (current == head) {
                    return;
                }
                if (current.prev != null) {
                    current.prev.next = current.next;
                }
                if (current.next != null) {
                    current.next.prev = current.prev;
                } else {
                    tail = current.prev;
                }
                current.next = head;
                head.prev = current;
                current.prev = null;
                head = current;
                return;
            }
            current = current.next;
        }
    }

    public void printHand() {
        Card current = head;
        while (current != null) {
            System.out.print(current.name + " / ");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Hand hand = new Hand();
        hand.addCard("Dark Magician");
        hand.addCard("Blue-Eyes White Dragon");
        hand.addCard("Red-Eyes Black Dragon");
        hand.addCard("Kuriboh");
        hand.addCard("Celtic Guardian");

        System.out.println("Mão inicial:");
        hand.printHand();

        hand.removeCard("Blue-Eyes White Dragon");
        System.out.println("\nApós remover Blue-Eyes White Dragon:");
        hand.printHand();

        hand.moveCardToFront("Red-Eyes Black Dragon");
        System.out.println("\nApós mover Red-Eyes Black Dragon para frente:");
        hand.printHand();

        hand.moveCardToFront("Kuriboh");
        System.out.println("\nApós mover Kuriboh para frente:");
        hand.printHand();
    }
}

