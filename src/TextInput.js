import { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Вы ввели: {text}</p>
    </div>
  );
}

export default TextInput;
