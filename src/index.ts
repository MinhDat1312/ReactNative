import { Person } from "./lab01/bai01";
import { Student } from "./lab01/bai02";
import { Car } from "./lab01/bai03";
import { Rectangle } from "./lab01/bai04";
import { BankAccount } from "./lab01/bai05";
import { Book } from "./lab01/bai06";
import { User } from "./lab01/bai07";
import { Product } from "./lab01/bai08";
import { Animal } from "./lab01/bai09";
import { Account } from "./lab01/bai10";
import { Cat } from "./lab01/bai11/Cat";
import { Dog } from "./lab01/bai11/Dog";
import { Bird } from "./lab01/bai12/Bird";
import { Fish } from "./lab01/bai12/Fish";
import { Circle } from "./lab01/bai13/Circle";
import { Square } from "./lab01/bai13/Square";
import { Developer } from "./lab01/bai14/Developer";
import { Manager } from "./lab01/bai14/Manager";
import { BookLib } from "./lab01/bai15/BookLib";
import { Library } from "./lab01/bai15/Library";
import { UserLib } from "./lab01/bai15/UserLib";

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

function bai10(): void {
    const account = new Account("MinhDat", "12345678", 1)
    console.log(account.username)
    console.log(account.accountId)
}

function bai11(): void {
    const dog =  new Dog("AAA")
    const cat = new Cat("BBB")

    dog.bark()
    cat.meow()
}

function bai12(): void {
    const sparrow = new Bird("Sparrow");
    sparrow.fly()

    const salmon = new Fish("Salmon");
    salmon.swim();
}

function bai13(): void {
    const square = new Square(5);
    console.log("Square area:", square.area());

    const circle = new Circle(3);
    console.log("Circle area:", circle.area());
}

function bai14(): void {
    const manager = new Manager("Alice", 80000, 10);
    manager.getDetails();
    manager.conductMeeting();

    const developer = new Developer("Bob", 60000, "TypeScript");
    developer.getDetails();
    developer.writeCode();
}

function bai15(): void {
    const library = new Library();

    const book1 = new BookLib("The Great Gatsby", "F. Scott Fitzgerald", "123456");
    const book2 = new BookLib("1984", "George Orwell", "654321");

    library.addBook(book1);
    library.addBook(book2);

    const user1 = new UserLib("Alice", 1);
    library.addUser(user1);

    library.listBooks();
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
bai10()
bai11()
bai12()
bai13()
bai14()
bai15()