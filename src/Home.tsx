import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./Style.css";

function Home() {
  return (
    <>
      <div className="Container">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default Home;
