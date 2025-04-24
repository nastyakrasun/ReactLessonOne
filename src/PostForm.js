// для отправки формы
import { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/posts', { title, body })
      .then(response => {
        alert('Пост добавлен');
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Текст поста"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Добавить пост</button>
    </form>
  );
}

export default PostForm;
