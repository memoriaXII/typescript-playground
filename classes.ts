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

class Department {
  name: string;
  employees: string[] = ["Max", "Anna"];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length, "length");
    console.log(this.employees, "employees");
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.printEmployeeInformation();
