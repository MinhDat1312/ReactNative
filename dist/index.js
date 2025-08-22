"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
function bai01() {
    var person = new bai01_1.Person("Nguyễn Thắng Minh Đạt", 21);
    return person;
}
function bai02(name, age, grade) {
    var student = new bai02_1.Student(name, age, grade);
    return student.displayAllInfo();
}
function bai03(brand, model, year) {
    var car = new bai03_1.Car(brand, model, year);
    return car.showCarInfo();
}
function bai04(width, height) {
    var rectangle = new bai04_1.Rectangle(width, height);
    return rectangle;
}
function bai05() {
    var account = new bai05_1.BankAccount(100000);
    account.deposit(100000);
    account.withdraw(200000);
    account.deposit(500000);
    console.log(account.view());
}
function bai06() {
    var book = new bai06_1.Book("ABCDEFGH", "Nguyễn Thắng Minh Đạt", 2025);
    return book;
}
function bai07() {
    var user = new bai07_1.User("Minh Đạt");
    console.log(`Before: ${user.getter()}`);
    user.setter("Nguyễn Thắng Minh Đạt");
    console.log(`After: ${user.getter()}`);
}
function bai08() {
    const products = [
        new bai08_1.Product('Car', 100),
        new bai08_1.Product('Plane', 200),
        new bai08_1.Product('Motor', 50),
        new bai08_1.Product('Train', 300)
    ];
    const productG100 = products.filter(product => product.price > 100);
    console.log(productG100);
}
function bai09() {
    const dog = {
        name: 'Dog',
        sound: () => 'Gau Gau'
    };
    console.log(`Animal: ${dog.name} with sound ${dog.sound()}`);
}
console.log(bai01());
console.log(bai02("Nguyễn Thắng Minh Đạt", 21, 10));
console.log(bai03("Ferrari", "Italy", 2000));
console.log(`Area: ${bai04(10, 5).area()}, Perimeter: ${bai04(10, 5).perimeter()}`);
bai05();
console.log(bai06());
bai07();
bai08();
bai09();
