import '../app/App.css';
import '../header/Header';
import Header from '../header/Header';
import Main from '../main/Main'

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
