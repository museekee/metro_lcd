import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Select from './pages/Select'
import LCD from './pages/LCD'

function App() {
  return (
    <div className="App" style={{height: `100%`}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Select />} />
          <Route path="/lcd/:line/:bound/:isExpress" element={<LCD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
