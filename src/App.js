import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Favrouit from './components/fav';
// import Footer from './components/footer';
import Main from "./components/landing";
import Navigation from "./components/navbar";
import Person1 from "./components/person1";
import Person2 from "./components/person2";
import Person3 from "./components/person3";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/person1" element={<Person1 />} />
          <Route path="/person2" element={<Person2 />} />
          <Route path="/person3" element={<Person3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
