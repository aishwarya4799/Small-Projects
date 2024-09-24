
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Component/Create';
import Edit from './Component/Edit';
import Display from './Component/Display';

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path="/" element={<Display/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
