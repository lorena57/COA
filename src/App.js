import './App.css';
import CoaForm from './components/CoaForm';
import Coas from './components/Coas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Certificate of Analysis</p>
        <CoaForm />
        <hr />
        <Coas />
      </header>
    </div>
  );
}

export default App;
