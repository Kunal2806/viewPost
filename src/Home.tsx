import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Data from "./Data/data.json";
import "./Style.css";

function Home() {
  let i = 0;
  return (
    <>
      <div className="Container">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <section className="UsersDiv">
            {Data.map((_post) => (
              <Users key={(i = i + 1)} user_id={_post.userId} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
