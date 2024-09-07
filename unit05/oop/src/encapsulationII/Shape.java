package encapsulationII;

public abstract sealed class Shape permits Circle, Rectangle{
    public abstract double area();

    public static void main(String[] args) {
        Shape circle = new Circle(5);

        System.out.println("Area "+ circle.area());

        Shape rectangle = new Rectangle(4,5);
        System.out.println("Area do Retângulo: "+ rectangle.area());

        Point point = new Point(3, 5);
        Point anotherPoint = new Point(5, 8);

        System.out.println("X" + point.x());
        System.out.println("Ponto: " + anotherPoint);
        System.out.println("Os pontos são iguais? "+point.equals(anotherPoint));
    }
}

