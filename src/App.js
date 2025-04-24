import "./App.css";

//import Welcome from "./Welcome";
//import Counter from "./Counter";
//import TextInput from "./TextInput";
//import Form from "./Form";
//import ToDoApp from "./ToDoApp";

// import { UserProvider } from "./contexts/UserProvider";
// import Profile from "./pages/Profile";

import PostList from './PostList';
import PostForm from './PostForm';

function App() {
  return (
    <div className='App'>
      <PostList/>
      <PostForm/>
    </div>
  );
}

export default App;
