import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PostPage from "./components/PostPage";
import UserPage from "./components/userpage";
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
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/Post/:id" element={<PostPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Home;
