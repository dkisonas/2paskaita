const formElement = document.querySelector('.add-todo-form');
formElement.addEventListener('submit', handleFormSubmit);
const completeButton = document.querySelectorAll('.complete-button');
completeButton.forEach((currentButton) => {
    currentButton.addEventListener('click', handleCompleteButtonClick);
});
const deleteButton = document.querySelectorAll('.delete-button');
for (let i = 0; i < completeButton.length; i++) {
    deleteButton[i].addEventListener('click', handleDeleteButtonClick);
}


function handleCompleteButtonClick() {
    const item = this.parentNode.parentNode;
    item.classList.add('done');
}

function handleDeleteButtonClick(e) {
    const item = this.parentNode.parentNode;
    item.remove();
}

function createButton(name) {
    const newButton = document.createElement('button');
    newButton.className = name + "-button";
    newButton.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    return newButton;
}

function handleFormSubmit(e) {
    e.preventDefault();
    const inputField = document.querySelector('.add-todo-form > input');
    const inputValue = inputField.value;
    if (inputValue === '') {
        errorParagraph = document.querySelector('p');
        errorParagraph.textContent = 'Please enter a task...';
        setTimeout(() => errorParagraph.textContent = '', 3000);
        return null;
    }

    const newListItem = document.createElement('li');
    newListItem.className = "todo-item";
    newListItem.textContent = inputValue;
    const deleteBtn = createButton("delete");
    const completeBtn = createButton("complete");
    const newDiv = document.createElement('div');

    newDiv.appendChild(completeBtn);
    completeBtn.addEventListener('click', handleCompleteButtonClick);
    newDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', handleDeleteButtonClick);
    newListItem.appendChild(newDiv);
    document.querySelector('.todo-list').appendChild(newListItem);

    inputField.value = null;
};