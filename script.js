
    document.addEventListener("DOMContentLoaded", () => {
        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((button) =>{
            button.addEventListener('click', () => {
               const listItem = button.parentElement;
               listItem.remove();
        
    });
});


const addButton = document.getElementById('add-button');
addButton.addEventListener('click' , () => {
    const bookNameInput = document.getElementById('book-name');
    const bookName = bookNameInput.value.trim();
    if (bookName !== '') {
        addBook(bookName)
        bookNameInput.value = '';
    }
});
    });


    
function addBook() {
    const bookNameInput = document.getElementById('book-name');
    const bookName = bookNameInput.value;
    if (bookName.trim() !== '') {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = bookName;
        const deleteSpan = document.createElement('span');
        deleteSpan.setAttribute('class', 'delete');
        deleteSpan.textContent = 'Delete';
    deleteSpan.className ='delete';
    deleteSpan.onclick = function (){
        li.remove()
    };
    
   
    li.appendChild(nameSpan);
    li.appendChild(deleteSpan);
    ul.appendChild(li);
    bookNameInput.value = '';
    }  
    
}




  