import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pl-4" >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact />}></Route>  
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="testimonials" element={<Testimonials />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </main>
</>
  );
}

export default App;
