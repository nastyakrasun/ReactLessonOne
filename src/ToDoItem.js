function ToDoItem({task, onDelete}) { //возвращает элементы списка, зависима от ToDoList, передаем данные в {}: {task, onDelete}
    return ( 
        <li>
            {task.text}
            <button onClick={() => onDelete(task.id)}>Удалить</button>
        </li>
     );
}

export default ToDoItem;
