import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';    
import TodoList from './TodoList'; // 컴포넌트 가져오기
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <div className='top'>
          <h1 style={{}}>
            <Link to="/" style={{textDecoration: "none"}}>
            할 일
            </Link>
          </h1>
        </div>
        <Link to="/profile/1">프로필</Link>
      </nav>
        <main>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/profile/:id" Component={Profile} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
