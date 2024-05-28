//Library Management system

class Book {
	constructor(title, author, ISBN) {
		this.id = Math.floor(Math.random() * 1000);
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.borrowed = false;
	}

	isBorrowed() {
		return this.borrowed;
	}
}

class User {
	constructor(name) {
		this.id = Math.floor(Math.random() * 1000);
		this.name = name;
		this.borrowedBooks = [];
	}

	peekBook(ISBN) {
		return this.borrowedBooks.find((book) => book.ISBN === ISBN);
	}

	returnBook(ISBN) {
		const book = this.borrowedBooks.find((book) => book.ISBN === ISBN);
		if (!book) {
			return "Book not found";
		}
		book.borrowed = false;
		this.borrowedBooks = this.borrowedBooks.filter(
			(book) => book.ISBN !== ISBN
		);
	}
}

class Library {
	constructor() {
		this.books = [];
		this.members = [];
	}

	addNewBook(book) {
		this.books.push(book);
	}

	registerMembers(user) {
		this.members.push(user);
	}

	borrowBook(user, ISBN) {
		const member = this.members.find((member) => member === user);
		const book = this.books.find((book) => book.id === ISBN);

		if (!member || !book) {
			return "member or book not found";
		}

		if (book.borrowed) {
			return "Book already borrowed";
		}

		if (member.borrowedBooks.length >= 3) {
			return false;
		}

		book.borrowed = true;
		member.borrowedBooks.push(book);
		return true;
	}
}
