import logo from './logo.svg';
import './App.css';

const MyButton = () => {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export default App;
