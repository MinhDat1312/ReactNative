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
import { helloPromise } from "./lab02/bai01";
import { getNumber } from "./lab02/bai02";
import { throwError } from "./lab02/bai03";
import { getRandomNumber } from "./lab02/bai04";
import { simulateTask } from "./lab02/bai05";
import { promiseAll } from "./lab02/bai06";
import { promiseRace } from "./lab02/bai07";
import { promiseChain } from "./lab02/bai08";
import { filterEvenNumbers } from "./lab02/bai09";
import { promiseFinally } from "./lab02/bai10";

// Lab01
console.log("=====================================================LAB 01=====================================================\n")

function bai01_01(): Person {
    var person = new Person("Nguyễn Thắng Minh Đạt", 21)

    return person;
}

function bai02_01(name: string, age: number, grade: number): string {
    var student = new Student(name, age, grade)

    return student.displayAllInfo()
}

function bai03_01(brand: string, model: string, year: number): string {
    var car = new Car(brand, model, year)

    return car.showCarInfo()
}

function bai04_01(width: number, height: number): Rectangle {
    var rectangle = new Rectangle(width, height)

    return rectangle
}

function bai05_01(): void {
    var account = new BankAccount(100000)
    account.deposit(100000)
    account.withdraw(200000)
    account.deposit(500000)

    console.log(account.view(), "\n")
}

function bai06_01(): Book {
    var book = new Book("ABCDEFGH", "Nguyễn Thắng Minh Đạt", 2025)

    return book;
}

function bai07_01(): void {
    var user = new User("Minh Đạt")
    console.log(`Before: ${user.getter()}`)
    user.setter("Nguyễn Thắng Minh Đạt")
    console.log(`After: ${user.getter()}`, "\n")
}

function bai08_01(): void {
    const products: Product[] = [
        new Product('Car', 100),
        new Product('Plane', 200),
        new Product('Motor', 50),
        new Product('Train', 300)
    ]

    const productG100: Product[] = products.filter(product => product.price > 100)
    console.log(productG100, "\n")
}

function bai09_01(): void {
    const dog: Animal = {
        name: 'Dog',
        sound: ()=> 'Gau Gau'
    }

    console.log(`Animal: ${dog.name} with sound ${dog.sound()}`, "\n")
}

function bai10_01(): void {
    const account = new Account("MinhDat", "12345678", 1)
    console.log(account.username)
    console.log(account.accountId, "\n")
}

function bai11_01(): void {
    const dog =  new Dog("AAA")
    const cat = new Cat("BBB")

    dog.bark()
    cat.meow()
}

function bai12_01(): void {
    const sparrow = new Bird("Sparrow");
    sparrow.fly()

    const salmon = new Fish("Salmon");
    salmon.swim();
}

function bai13_01(): void {
    const square = new Square(5);
    console.log("Square area:", square.area());

    const circle = new Circle(3);
    console.log("Circle area:", circle.area(), "\n");
}

function bai14_01(): void {
    const manager = new Manager("Alice", 80000, 10);
    manager.getDetails();
    manager.conductMeeting();

    const developer = new Developer("Bob", 60000, "TypeScript");
    developer.getDetails();
    developer.writeCode();
}

function bai15_01(): void {
    const library = new Library();

    const book1 = new BookLib("The Great Gatsby", "F. Scott Fitzgerald", "123456");
    const book2 = new BookLib("1984", "George Orwell", "654321");

    library.addBook(book1);
    library.addBook(book2);

    const user1 = new UserLib("Alice", 1);
    library.addUser(user1);

    library.listBooks();
}

function bai16_01(): void {
    const numberBox = new Box<number>(123);
    console.log("In box:", numberBox);

    const bookBox = new Box<BookLib>(new BookLib("The Great Gatsby", "F. Scott Fitzgerald", "123456"))
    console.log("In box:", bookBox, "\n")
}

function bai17_01(): void {
    const logger1 = Logger.getInstance()
    const logger2 = Logger.getInstance();

    logger1.log("Application started.");
    logger2.error("Something went wrong!");
}

function bai18_01(): void {
    console.log("Add:", MathUtil.add(10, 5));
    console.log("Subtract:", MathUtil.subtract(10, 5));
    console.log("Multiply:", MathUtil.multiply(10, 5));
    console.log("Divide:", MathUtil.divide(10, 5), "\n");
}

function bai19_01(): void {
    const animals: AnimalMore[] = [
        new DogMore("Buddy"),
        new AnimalMore("GenericAnimal")
    ];

    for (const animal of animals) {
        animal.makeSound();
    }
}

function bai20_01(): void {
    const car = new CarMore("Toyota", 120);
    car.drive();
    car.stop();

    const bike = new BikeMore("Yamaha", 80);
    bike.drive();
    bike.stop();
}

function bai21_01(): void {
    const bookRepo = new Repository<Book>();
    bookRepo.add(new Book("ABCDEFGH", "Nguyễn Thắng Minh Đạt", 2025));
    bookRepo.add(new Book("456-XYZ", "QWERTYUIOP", 1984));
    console.log("Books:", bookRepo.getAll(), "\n");
}

function bai22_01(): void {
    const numberStack = new Stack<number>();

    numberStack.push(10);
    numberStack.push(20);
    numberStack.push(30);

    console.log("Peek:", numberStack.peek());
    console.log("Pop:", numberStack.pop());
    console.log("Peek after pop:", numberStack.peek());
    console.log("Is empty?", numberStack.isEmpty(), "\n");
}

function bai23_01(): void {
    const cash: Payment = new CashPayment();
    cash.pay(100);

    const card: Payment = new CardPayment("1234-5678-9876-5432");
    card.pay(250);
}

function bai24_01(): void {
    const fan = new Fan("Panasonic");
    fan.turnOn();

    const ac = new AirConditioner("Daikin");
    ac.turnOn();
}

function bai25_01(): void {
    Shape.describe()
}

function bai26_01(): void {
    const order = new Order();
    order.addProduct(new Product("Laptop", 1200));
    order.addProduct(new Product("Mouse", 25));
    order.addProduct(new Product("Keyboard", 75));

    console.log("Total Price: $" + order.calculateTotal(), "\n");
}

function bai27_01(): void {
    const teacher = new Teacher("Alice", 35, "Mathematics");
    teacher.introduce();
}

function bai28_01(): void {
    const dog = new DogProtected("Buddy");
    dog.speak();

    const cat = new CatProtected("Whiskers");
    cat.speak();
}

function bai29_01(): void {
    const car: Movable = new CarMovable("Tesla", 120);
    const robot: Movable = new Robot("RX-78");

    car.move();
    robot.move();
}

function bai30_01(): void {
    const school = new School();

    school.addTeacher(new Teacher("Alice", 35, "Mathematics"));
    school.addTeacher(new Teacher("Bob", 42, "History"));

    school.addStudent(new Student("Charlie", 15, 10));
    school.addStudent(new Student("Diana", 14, 9));

    school.displayInfo();
}

console.log("===Bài 01===")
console.log(bai01_01(), "\n")

console.log("===Bài 02===")
console.log(bai02_01("Nguyễn Thắng Minh Đạt", 21, 10), "\n")

console.log("===Bài 03===")
console.log(bai03_01("Ferrari", "Italy", 2000), "\n")

console.log("===Bài 04===")
console.log(`Area: ${bai04_01(10, 5).area()}, Perimeter: ${bai04_01(10, 5).perimeter()}`, "\n")

console.log("===Bài 05===")
bai05_01()

console.log("===Bài 06===")
console.log(bai06_01(), "\n")

console.log("===Bài 07===")
bai07_01()

console.log("===Bài 08===")
bai08_01()

console.log("===Bài 09===")
bai09_01()

console.log("===Bài 10===")
bai10_01()

console.log("===Bài 11===")
bai11_01()
console.log("\n")

console.log("===Bài 12===")
bai12_01()
console.log("\n")

console.log("===Bài 13===")
bai13_01()

console.log("===Bài 14===")
bai14_01()
console.log("\n")

console.log("===Bài 15===")
bai15_01()
console.log("\n")

console.log("===Bài 16===")
bai16_01()

console.log("===Bài 17===")
bai17_01()

console.log("\n===Bài 18===")
bai18_01()

console.log("===Bài 19===")
bai19_01()

console.log("\n===Bài 20===")
bai20_01()

console.log("===Bài 21===")
bai21_01()

console.log("===Bài 22===")
bai22_01()

console.log("===Bài 23===")
bai23_01()

console.log("\n===Bài 24===")
bai24_01()

console.log("\n===Bài 25===")
bai25_01()

console.log("\n===Bài 26===")
bai26_01()

console.log("===Bài 27===")
bai27_01()

console.log("\n===Bài 28===")
bai28_01()

console.log("\n===Bài 29===")
bai29_01()

console.log("\n===Bài 30===")
bai30_01()

// Lab02
console.log("\n=====================================================LAB 02=====================================================\n")

function bai01_02(): void {
    helloPromise.then(message => console.log(message))
}

function bai02_02(): void {
    getNumber().then(message => console.log(message, "\n"))
}

function bai03_02(): void {
    throwError()
        .then(message=>console.log(message))
        .catch(error =>{
            console.error(error.message)
        })
}

function bai04_02(): void {
    getRandomNumber()
        .then((result) => {
            console.log("Random number:", result, "\n");
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
}

function bai05_02(): void {
    simulateTask(2000).then((message) => {
        console.log(message, "\n");
    });
}

function bai06_02(): void {
    promiseAll().then(message => console.log(message))
}

function bai07_02(): void {
    promiseRace().then(message => console.log(message))
}

function bai08_02(): void {
    promiseChain
}

function bai09_02(): void {
    filterEvenNumbers([1, 2, 3, 4, 5, 6])
        .then((result) => {
            console.log("Even numbers:", result, "\n");
        })
        .catch((err) => {
            console.error("Error:", err);
        });
}

function bai10_02(): void {
    promiseFinally(true)
        .then((result) => {
            console.log("Result:", result);
        })
        .catch((error) => {
            console.error("Error:", error);
        })
        .finally(() => {
            console.log("Done", "\n");
        });
}

bai01_02()
bai02_02()
bai03_02()
bai04_02()
bai05_02()
bai06_02()
bai07_02()
bai08_02()
bai09_02()
bai10_02()