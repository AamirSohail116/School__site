import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import CoursesScreen from "./Screens/CoursesScreen";
import ContactScreen from "./Screens/ContactScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </div>
  );
}

export default App;
