import { Person } from "./bai01";
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";
import { User } from "./bai07";
import { Product } from "./bai08";
import { Animal } from "./bai09";

function bai01(): Person {
    var person = new Person("Nguyễn Thắng Minh Đạt", 21)

    return person;
}

function bai02(name: string, age: number, grade: number): string {
    var student = new Student(name, age, grade)

    return student.displayAllInfo()
}

function bai03(brand: string, model: string, year: number): string {
    var car = new Car(brand, model, year)

    return car.showCarInfo()
}

function bai04(width: number, height: number): Rectangle {
    var rectangle = new Rectangle(width, height)

    return rectangle
}

function bai05(): void {
    var account = new BankAccount(100000)
    account.deposit(100000)
    account.withdraw(200000)
    account.deposit(500000)

    console.log(account.view())
}

function bai06(): Book {
    var book = new Book("ABCDEFGH", "Nguyễn Thắng Minh Đạt", 2025)

    return book;
}

function bai07(): void {
    var user = new User("Minh Đạt")
    console.log(`Before: ${user.getter()}`)
    user.setter("Nguyễn Thắng Minh Đạt")
    console.log(`After: ${user.getter()}`)
}

function bai08(): void {
    const products: Product[] = [
        new Product('Car', 100),
        new Product('Plane', 200),
        new Product('Motor', 50),
        new Product('Train', 300)
    ]

    const productG100: Product[] = products.filter(product => product.price > 100)
    console.log(productG100)
}

function bai09(): void {
    const dog: Animal = {
        name: 'Dog',
        sound: ()=> 'Gau Gau'
    }

    console.log(`Animal: ${dog.name} with sound ${dog.sound()}`)
}

console.log(bai01())
console.log(bai02("Nguyễn Thắng Minh Đạt", 21, 10))
console.log(bai03("Ferrari", "Italy", 2000))
console.log(`Area: ${bai04(10, 5).area()}, Perimeter: ${bai04(10, 5).perimeter()}`)
bai05()
console.log(bai06())
bai07()
bai08()
bai09()