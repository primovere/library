let myLibrary = ["Harry Potter", "Atomic Habit"];
function Book(title, author, pages, read, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return info;
    }
}
function addBookToLibrary() {
    
}