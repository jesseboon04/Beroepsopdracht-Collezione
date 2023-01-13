import "./App.css";
import Homepage from "../Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPagina from "../LoginPagina/Loginpage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Login" element={<LoginPagina/>}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
