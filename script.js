let myLibrary = [];
let library = document.querySelector("h1");
let form = document.querySelector("form");
let addBook = document.querySelector("#addBook");
addBook.addEventListener("click", () => {
  form.classList.remove("hidden");
});

// div = document.createElement("div");
//   div.innerText = "hello";
//   div.classList.add("card");
//   library.appendChild(div);
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let title = prompt("enter book name");
  let author = prompt("enter book author");
  let pages = prompt("enter book pages");
  let bookDetails = new Book(title, author, pages);
  myLibrary.push(bookDetails);
}
function printBooks() {
  console.table(myLibrary);
}
