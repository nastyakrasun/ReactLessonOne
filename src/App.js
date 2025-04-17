import Welcome from "./Welcome";
import Counter from "./Counter";
import TextInput from "./TextInput";
import Form from "./Form";

function App() {
  return (
    <div>
      <h1>Привет, мир!</h1>
      <p>Это мое первое приложение React</p>
      <Welcome name = "Anna"/>
      <Counter />
      <TextInput />
      <Form />
    </div>
  );
}

export default App;
