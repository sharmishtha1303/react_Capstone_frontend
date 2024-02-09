import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import './App.css';

//const hello =  () => { {console.log("hey")}};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
