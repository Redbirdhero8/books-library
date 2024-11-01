let button = document.querySelector(".btn");

function Book(bookname, author, pages, read) {
  this.bookname = bookname;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    //function create table with the information
    let table = document.getElementById("table");
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.textContent = this.bookname;
    cell2.textContent = this.author;
    cell3.textContent = this.pages;

    //checkbox checked or not
    if (this.read == true) {
      cell4.innerHTML =
        '<input type="checkbox" name="Checkbox" id="checkbox-book" checked />';
    } else {
      cell4.innerHTML =
        '<input type="checkbox" name="Checkbox" id="checkbox-book" />';
    }

    // button to delete book from a list
    cell5.textContent = "X";
    cell5.innerHTML =
      '<input type="button" value="X" class="delete" onclick="deleteRow(this)"/>';

    // width of created cells

    cell1.style.width = "30rem";
    cell2.style.width = "20rem";
    cell3.style.width = "5rem";
    cell4.style.width = "1rem";
    cell5.style.width = "1rem";
  };
}

// function to delete book from a list
function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}

// Event listener when user click on "addbook"

button.addEventListener("click", () => {
  //get value from form and store in to a variable
  let bookname = document.forms["myForm"]["bname"].value;
  let author = document.forms["myForm"]["aname"].value;
  let pages = document.forms["myForm"]["pages"].value;
  let read = document.forms["myForm"]["checkbox"].checked;

  // Alerts when user doesn't fill all information
  if (
    document.forms["myForm"]["bname"].value == "" &&
    document.forms["myForm"]["aname"].value == "" &&
    document.forms["myForm"]["pages"].value == ""
  ) {
    alert("Please, fill the information!");
  } else if (
    document.forms["myForm"]["bname"].value !== "" &&
    document.forms["myForm"]["aname"].value == "" &&
    document.forms["myForm"]["pages"].value == ""
  ) {
    alert("Please, fill author and number of a page!");
  } else if (
    document.forms["myForm"]["bname"].value == "" &&
    document.forms["myForm"]["aname"].value !== "" &&
    document.forms["myForm"]["pages"].value == ""
  ) {
    alert("Please, fill name of a book and number of a page!");
  } else if (
    document.forms["myForm"]["bname"].value == "" &&
    document.forms["myForm"]["aname"].value == "" &&
    document.forms["myForm"]["pages"].value !== ""
  ) {
    alert("Please, fill name of a book and author!");
  } else if (
    (document.forms["myForm"]["bname"].value == "" &&
      document.forms["myForm"]["aname"].value !== "" &&
      document.forms["myForm"]["pages"].value !== "") ||
    (document.forms["myForm"]["bname"].value !== "" &&
      document.forms["myForm"]["aname"].value == "" &&
      document.forms["myForm"]["pages"].value !== "") ||
    (document.forms["myForm"]["bname"].value !== "" &&
      document.forms["myForm"]["aname"].value !== "" &&
      document.forms["myForm"]["pages"].value == "")
  ) {
    alert("Please, fill missing information!");
  }

  //When it's all fill, reset form and run book.info()
  else {
    const book = new Book(bookname, author, pages, read);
    document.getElementById("myForm").reset();

    book.info();
  }
});
