import "./Style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import PostCard from "./components/PostCard";

function ViewPost() {
  return (
    <>
      <div className="Container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:userId" element={<PostPage />} />
            <Route path="/user/:userId/post/:id" element={<PostCard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default ViewPost;
