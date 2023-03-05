import './App.css';
import Home from './components/Home';
import Upload from './components/Upload';
import Predict from './components/Predict';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="upload" element={ <Upload/> } />
        <Route path="predict" element={ <Predict/> } />
      </Routes>
    </div>
  );
}

export default App;
