import './App.css';
import Overlay from './components/Overlay/Overlay';

function App() {
  return (
    <div className="App">
      <Overlay show={true} loaderWidth={60} />
    </div>
  );
}

export default App;
