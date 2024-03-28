import { BrowserRouter } from 'react-router-dom';
import Routing from 'Routing';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routing />
      </main>
    </BrowserRouter>
  );
}

export default App;
