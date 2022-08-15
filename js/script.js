"use strict";

class Employee {
    static daysVacation = 18;
    constructor(firstName, lastName, age, jobPosition, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }
    get fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    calcYearSalary() {
        console.log (this.salary * 12);
    } 
};
const manager = new Employee("Peter", "Parker", 23, "manager", 10000);
const accountant = new Employee("Anna", "Karenina", 31, "accountant", 20000);

console.log(manager);
console.log(accountant);
manager.fullName;
accountant.fullName;
manager.calcYearSalary();
accountant.calcYearSalary();