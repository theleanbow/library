let myLibrary = [];
let bookDetails;
let library = document.querySelector("h1");
let form = document.querySelector("form");
let addBook = document.querySelector("#addBook");
function submit() {
  let bookSubmit = document.querySelector(".bookSubmit");
  bookSubmit.addEventListener("click", () => {
    bookDetails = new Book(
      form.title.value,
      form.author.value,
      parseInt(form.pages.value)
    );
    myLibrary.push(bookDetails);
    form.reset();
    display();
    form.classList.add("hidden");
    addBook.classList.remove("hidden");
  });
}
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
addBook.addEventListener("click", () => {
  form.classList.remove("hidden");
  addBook.classList.add("hidden");
});
function display() {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    div = document.createElement("div");
    divCards = document.createElement("div");
    titleCard = document.createElement("div");
    titleCard.innerText = myLibrary[i].title;
    authorCard = document.createElement("div");
    authorCard.innerText = myLibrary[i].author;
    pagesCard = document.createElement("div");
    pagesCard.innerText = myLibrary[i].pages;
    divCards.classList.add("card");
    library.appendChild(div);
    div.appendChild(divCards);
    divCards.appendChild(titleCard);
    divCards.appendChild(authorCard);
    divCards.appendChild(pagesCard);
  }
}
submit();
