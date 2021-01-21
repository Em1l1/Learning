// Declara una clase
/* function Car(license, driver) {
  this.id;
  this.license = license;
  this.drive = driver;
  this.passenger;
}

Car.prototype.printDataCar = function ()  {
  console.log(this.drive)
  console.log(this.driver.name)
  console.log(this.driver.document)
}
 */

 // Nueva forma de declarar un clase
class Car {

  constructor(license, driver) {
    
    this.id
    this.license = license;
    this.driver = driver;
    this.passenger;
  }

  printDataCar() {
    console.log(this.driver)
    console.log(this.driver.name)
    console.log(this.driver.document)
  }
}
