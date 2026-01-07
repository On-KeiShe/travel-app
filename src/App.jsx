import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Countdown from "./components/Countdown";
import ToDoList from "./components/ToDoList";
import Weather from "./components/Weather";
import VirtualPostcard from "./components/VirtualPostcard";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/virtual-postcard" element={<VirtualPostcard />} />
      </Routes>
    </>
  );
}

export default App;