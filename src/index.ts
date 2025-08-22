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
import { Box } from "./lab01/bai16";
import { Logger } from "./lab01/bai17";
import { MathUtil } from "./lab01/bai18";
import { AnimalMore } from "./lab01/bai19/Animal";
import { DogMore } from "./lab01/bai19/Dog";
import { BikeMore } from "./lab01/bai20/Bike";
import { CarMore } from "./lab01/bai20/Car";
import { Repository } from "./lab01/bai21";
import { Stack } from "./lab01/bai22";
import { CardPayment } from "./lab01/bai23/CardPayment";
import { CashPayment } from "./lab01/bai23/CashPayment";
import { Payment } from "./lab01/bai23/Payment";
import { AirConditioner } from "./lab01/bai24/AirConditioner";
import { Fan } from "./lab01/bai24/Fan";
import { Shape } from "./lab01/bai25";
import { Order } from "./lab01/bai26";
import { Teacher } from "./lab01/bai27";
import { CatProtected } from "./lab01/bai28/Cat";
import { DogProtected } from "./lab01/bai28/Dog";
import { CarMovable } from "./lab01/bai29/Car";
import { Movable } from "./lab01/bai29/Movable";
import { Robot } from "./lab01/bai29/Robot";
import { School } from "./lab01/bai30/School";

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

    console.log(account.view(), "\n")
}

function bai06(): Book {
    var book = new Book("ABCDEFGH", "Nguyễn Thắng Minh Đạt", 2025)

    return book;
}

function bai07(): void {
    var user = new User("Minh Đạt")
    console.log(`Before: ${user.getter()}`)
    user.setter("Nguyễn Thắng Minh Đạt")
    console.log(`After: ${user.getter()}`, "\n")
}

function bai08(): void {
    const products: Product[] = [
        new Product('Car', 100),
        new Product('Plane', 200),
        new Product('Motor', 50),
        new Product('Train', 300)
    ]

    const productG100: Product[] = products.filter(product => product.price > 100)
    console.log(productG100, "\n")
}

function bai09(): void {
    const dog: Animal = {
        name: 'Dog',
        sound: ()=> 'Gau Gau'
    }

    console.log(`Animal: ${dog.name} with sound ${dog.sound()}`, "\n")
}

function bai10(): void {
    const account = new Account("MinhDat", "12345678", 1)
    console.log(account.username)
    console.log(account.accountId, "\n")
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
    console.log("Circle area:", circle.area(), "\n");
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

function bai16(): void {
    const numberBox = new Box<number>(123);
    console.log("In box:", numberBox);

    const bookBox = new Box<BookLib>(new BookLib("The Great Gatsby", "F. Scott Fitzgerald", "123456"))
    console.log("In box:", bookBox, "\n")
}

function bai17(): void {
    const logger1 = Logger.getInstance()
    const logger2 = Logger.getInstance();

    logger1.log("Application started.");
    logger2.error("Something went wrong!");
}

function bai18(): void {
    console.log("Add:", MathUtil.add(10, 5));
    console.log("Subtract:", MathUtil.subtract(10, 5));
    console.log("Multiply:", MathUtil.multiply(10, 5));
    console.log("Divide:", MathUtil.divide(10, 5), "\n");
}

function bai19(): void {
    const animals: AnimalMore[] = [
        new DogMore("Buddy"),
        new AnimalMore("GenericAnimal")
    ];

    for (const animal of animals) {
        animal.makeSound();
    }
}

function bai20(): void {
    const car = new CarMore("Toyota", 120);
    car.drive();
    car.stop();

    const bike = new BikeMore("Yamaha", 80);
    bike.drive();
    bike.stop();
}

function bai21(): void {
    const bookRepo = new Repository<Book>();
    bookRepo.add(new Book("ABCDEFGH", "Nguyễn Thắng Minh Đạt", 2025));
    bookRepo.add(new Book("456-XYZ", "QWERTYUIOP", 1984));
    console.log("Books:", bookRepo.getAll(), "\n");
}

function bai22(): void {
    const numberStack = new Stack<number>();

    numberStack.push(10);
    numberStack.push(20);
    numberStack.push(30);

    console.log("Peek:", numberStack.peek());
    console.log("Pop:", numberStack.pop());
    console.log("Peek after pop:", numberStack.peek());
    console.log("Is empty?", numberStack.isEmpty(), "\n");
}

function bai23(): void {
    const cash: Payment = new CashPayment();
    cash.pay(100);

    const card: Payment = new CardPayment("1234-5678-9876-5432");
    card.pay(250);
}

function bai24(): void {
    const fan = new Fan("Panasonic");
    fan.turnOn();

    const ac = new AirConditioner("Daikin");
    ac.turnOn();
}

function bai25(): void {
    Shape.describe()
}

function bai26(): void {
    const order = new Order();
    order.addProduct(new Product("Laptop", 1200));
    order.addProduct(new Product("Mouse", 25));
    order.addProduct(new Product("Keyboard", 75));

    console.log("Total Price: $" + order.calculateTotal(), "\n");
}

function bai27(): void {
    const teacher = new Teacher("Alice", 35, "Mathematics");
    teacher.introduce();
}

function bai28(): void {
    const dog = new DogProtected("Buddy");
    dog.speak();

    const cat = new CatProtected("Whiskers");
    cat.speak();
}

function bai29(): void {
    const car: Movable = new CarMovable("Tesla", 120);
    const robot: Movable = new Robot("RX-78");

    car.move();
    robot.move();
}

function bai30(): void {
    const school = new School();

    school.addTeacher(new Teacher("Alice", 35, "Mathematics"));
    school.addTeacher(new Teacher("Bob", 42, "History"));

    school.addStudent(new Student("Charlie", 15, 10));
    school.addStudent(new Student("Diana", 14, 9));

    school.displayInfo();
}

console.log("===Bài 01===")
console.log(bai01(), "\n")

console.log("===Bài 02===")
console.log(bai02("Nguyễn Thắng Minh Đạt", 21, 10), "\n")

console.log("===Bài 03===")
console.log(bai03("Ferrari", "Italy", 2000), "\n")

console.log("===Bài 04===")
console.log(`Area: ${bai04(10, 5).area()}, Perimeter: ${bai04(10, 5).perimeter()}`, "\n")

console.log("===Bài 05===")
bai05()

console.log("===Bài 06===")
console.log(bai06(), "\n")

console.log("===Bài 07===")
bai07()

console.log("===Bài 08===")
bai08()

console.log("===Bài 09===")
bai09()

console.log("===Bài 10===")
bai10()

console.log("===Bài 11===")
bai11()
console.log("\n")

console.log("===Bài 12===")
bai12()
console.log("\n")

console.log("===Bài 13===")
bai13()

console.log("===Bài 14===")
bai14()
console.log("\n")

console.log("===Bài 15===")
bai15()
console.log("\n")

console.log("===Bài 16===")
bai16()

console.log("===Bài 17===")
bai17()

console.log("\n===Bài 18===")
bai18()

console.log("===Bài 19===")
bai19()

console.log("\n===Bài 20===")
bai20()

console.log("===Bài 21===")
bai21()

console.log("===Bài 22===")
bai22()

console.log("===Bài 23===")
bai23()

console.log("\n===Bài 24===")
bai24()

console.log("\n===Bài 25===")
bai25()

console.log("\n===Bài 26===")
bai26()

console.log("===Bài 27===")
bai27()

console.log("\n===Bài 28===")
bai28()

console.log("\n===Bài 29===")
bai29()

console.log("\n===Bài 30===")
bai30()