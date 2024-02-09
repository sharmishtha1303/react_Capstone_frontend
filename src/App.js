import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';

//const hello =  () => { {console.log("hey")}};
function App() {
  debugger;
  return (
    <BrowserRouter>
      <Routes>
        debugger;
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
