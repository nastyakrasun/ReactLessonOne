import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoApp() {
  // основной компонент, зависимые - ToDoItem
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }); // состояния которые хранят таски
  const [input, setInput] = useState(""); // состояние для ввода тасков
  function deleteTask(id) {
    //прописываем функции до return
    setTasks(tasks.filter((task) => task.id !== id)); // функция будет выполнять фильтрацию по таскам с уникальными айди для нашего массива заданий
  }
  function addTask() {
    //прописываем функции до return
    if (input.trim() === "") return;
    const newTask = {
      // новое задание представляет собой текст задания и идентификатор
      id: Date.now(),
      text: input,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }
  // useEffect единожды загружает задачи при загрузке страницы
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //useEffect(() => {
  //  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  //  if (savedTasks) {
  //     setTasks(savedTasks);
  //   }
  // }, []);

  return (
    <div>
      <h2>Мой первый ToDo-list</h2>
      <input
        type="text"
        value={input}
        placeholder="Введите новую задачу" //для улучшения пользовательского оптыа по дефолту отобразится в поле ввода
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
