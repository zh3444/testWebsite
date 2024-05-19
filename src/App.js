import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import OurTeam from './Components/OurTeam';
import Services from './Components/Services';
import SuccessCases from './Components/SuccessCases';
import ContactInfo from './Components/ContactInfo';
import rvLogo from "./Icons/rvLogo.png";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <img src={rvLogo} alt="rvLogo" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/SuccessCases" element={<SuccessCases />} />
            <Route path="/ContactInfo" element={<ContactInfo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
