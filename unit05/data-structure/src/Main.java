import lists.CustomList;

public class Main {
    public static void main(String[] args) {
        CustomList list = new CustomList();

        list.add(10);
        list.add(5);
        list.add(20);
        list.add(30);
        list.add(50);
        list.add(70);
        list.add(60);
        list.add(80);
        list.add(90);
        list.add(100);
        list.add(120);
        list.add(130);


        System.out.println(list.toString());
        list.remove(3);
        System.out.println(list.get(4));
        System.out.println(list.toString());

    }
}