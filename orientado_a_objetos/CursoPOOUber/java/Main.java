class Main {

  public static void main(String[] args) {
    System.out.println("Hola Mundo");
    UberX uberx = new UberX("AMQ123", new Account("Andres Herrera", "AND123"), "Chevrolet", "Sonic");
    /* uberx.passegenger = 4; */
    uberx.setPassenger(4);
    uberx.printDataCar();

    UberVan uberVan = new UberVan("FGH345", new Account("Daniel Herrera", "AND123"));
    uberVan.setPassenger(6);
    uberVan.printDataCar();

    /* Car car2 = new Car("AMQ222", new Account("Andrea Herrera", "ANDA876"));
    car2.passegenger = 8;
    car2.printDataCar(); */
  }
}

