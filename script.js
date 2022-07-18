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
  });
}
// });
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
addBook.addEventListener("click", () => {
  form.classList.remove("hidden");
  addBook.classList.add("hidden");
});

// div = document.createElement("div");
//   div.innerText = "hello";
//   div.classList.add("card");
//   library.appendChild(div);
submit();
