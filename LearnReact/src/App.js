import logo from './logo.svg';
import './App.css';
import Hello from './Hello';  
import Counter from './Counter';
import TextInput from './TextInput';  // 컴포넌트 가져오기

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App</h1>
        <Hello name="React"/>
        <Counter />
        <TextInput />
      </header>
    </div>
  );
}

export default App;
