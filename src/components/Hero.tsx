import Users from "./Users";
import Data from "./Data/data.json";
import { useState } from "react";

function Hero() {
  const [Arrow, setArrow] = useState(false);
  // const [prev, setprev] = useState(0);
  return (
    <>
      <div className="HeroTitle">
        <div className="Heroh1">view</div>
        <div className="Heroh2">
          <h1>post</h1>
          <h1>user</h1>
        </div>
      </div>
      <div className="UsersCard">
        <img className="usersImg" src="./image/users.jpg" />
        <img
          className="usersArrow"
          src={Arrow ? "./image/usersDownArrow.png" : "./image/usersArrow.png"}
          onClick={() => setArrow((pre) => !pre)}
        />
      </div>
      {/* {Data.map((_post, index) => {
        if (prev !== _post.userId) {
          <div className="UsersDiv">
            <Users key={index} user_id={_post.userId} />
          </div>;
        }
        setprev(_post.userId);
      })} */}
      {Arrow && (
        <div className="UsersDiv">
          {Data.map((_post, index) => (
            <Users key={index} user_id={_post.userId} />
          ))}
        </div>
      )}
    </>
  );
}

export default Hero;
