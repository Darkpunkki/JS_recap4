// array for todo list

let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: false,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector('ul');

todoList.forEach((todo) => {
  // create the html content
  const todoHTML = `<li id="item-${todo.id}"> <input type="checkbox" id="todo-${
    todo.id
  }" ${todo.completed ? 'checked' : ''} />
    <label for="todo-${todo.id}">${todo.task}</label>
    <button class="delete-btn" onclick="deleteItem(${todo.id})">X</button>
    </li>`;

  // add the html content to the ul
  ul.insertAdjacentHTML('beforeend', todoHTML);

  // add event listener to the checkbox and set the completed value to the opposite of the current value
  document.getElementById(`todo-${todo.id}`).addEventListener('change', () => {
    todo.completed = !todo.completed;

    console.log(todo.completed);
    console.log(todoList);
  });
});

function deleteItem(todoId) {
  todoList = todoList.filter((todo) => todo.id !== todoId);

  const itemToDelete = document.getElementById(`item-${todoId}`);

  if (itemToDelete) {
    ul.removeChild(itemToDelete);
  }
}
