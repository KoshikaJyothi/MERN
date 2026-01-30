class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    available = true;
    isAvailable(){
        return this.available;
    }
    borrow(){
        this.available=false
    }
    returnBook(){
        this.available=true
    }
    getInfo(){
        return `${this.title} by ${this.author}, ${this.pages} pages. Available: ${this.available}`;
    }
    isLongbook(){
        return this.pages > 300;
    }
}
HarryPotter = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223);
console.log(HarryPotter.getInfo());
TheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 310);
console.log(TheHobbit.getInfo());
//Perform the following operations:

    //   i. Display info of all books
    //   ii. Borrow 2 books and show their availability status
    //   iii. Return 1 book and show updated status
    //   iv. Count how many books are "long books" (more than 300 pages)
    //   v. List all available books**/
