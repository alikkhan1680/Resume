import './App.css';
import Compyuter from './compyuter';
import Mobile from './mobile';

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <Compyuter />
      </div>
      <div className="mobile">
        <Mobile />
      </div>
    </div>
  );
}

export default App;
