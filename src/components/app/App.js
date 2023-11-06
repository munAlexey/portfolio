import { Route, Routes } from 'react-router-dom';
import '../app/App.css';
import '../header/Header';
import Main from '../main/Main'

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main / >}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
