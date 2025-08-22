import { BookLib } from "./BookLib";
import { UserLib } from "./UserLib";

export class Library {
  private books: BookLib[] = [];
  private users: UserLib[] = [];

  addBook(book: BookLib): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  }

  addUser(user: UserLib): void {
    this.users.push(user);
    console.log(`User "${user.name}" registered to the library.`);
  }

  listBooks(): void {
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} by ${book.author}`);
    });
  }
}