import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Write from "./pages/Write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/post/:postId" element={<Single/>} />
      </Routes>
    </Router>
  );
}

export default App;
