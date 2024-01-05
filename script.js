//Variables

const titleInput=document.querySelector("#title");
const authorInput=document.querySelector("#author");
const isbnInput=document.querySelector("#isbn");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

button.addEventListener("click",function(){
    if(titleInput.value=="" && authorInput.value=="" && isbnInput.value== ""){
        alert("Enter Any Imput");
    }
    else{
        const bookListRow = document.createElement("tr");
//Title Appending
        const newTitle = document.createElement("th");
        newTitle.innerHTML = titleInput.value;
        bookListRow.appendChild(newTitle);
//Author Appending
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookListRow.appendChild(newAuthor);
//ISBN Appending
        const newISBN = document.createElement("th");
        newISBN.innerHTML = isbnInput.value;
        bookListRow.appendChild(newISBN);
//Appending all data to Table
        bookList.appendChild(bookListRow);

        const newButton= document.createElement("button");
        newButton.classList.add("btn-grad");
        newButton.innerHTML="Delete";
        bookListRow.appendChild(newButton);
        
        newButton.addEventListener('click',()=>{
                bookListRow.remove();
        })
//Resetting Input Fields
titleInput.value="";
authorInput.value="";
isbnInput.value="";
    }
})

