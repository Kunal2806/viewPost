import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Users from "./components/userpage";
import "./Style.css";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="Container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/user/:userId" element={<Users />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Home;
