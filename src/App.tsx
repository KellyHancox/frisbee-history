import './App.css';
import HomePage from "./HomePage";
import NavBar from './NavBar';
import { Routes, Route } from "react-router-dom";
import WomensClub from './WomensClub';
import MensClub from './MensClub';
import MensCollege from './MensCollege';
import MixedClub from './MixedClub';
import WomensCollege from './WomensCollege';
import TeamPage from './TeamPage';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/womensclub" element={<WomensClub />} />
          <Route path="/mensclub" element={<MensClub />} />
          <Route path="/mixedclub" element={<MixedClub />} />
          <Route path="/womenscollege" element={<WomensCollege />} />
          <Route path="/menscollege" element={<MensCollege />} />
          <Route path="/team/:id" element={<TeamPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
