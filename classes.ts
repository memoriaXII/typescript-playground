class Vehicle {
  constructor(public color: string, public wheels: number) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange", 2);
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color, wheels);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
