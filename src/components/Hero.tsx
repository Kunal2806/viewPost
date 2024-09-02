import Users from "./Users";
import Data from "./Data/data.json";
import { useState } from "react";

function Hero() {
  const [Arrow, setArrow] = useState(false);

  const dataArray = Data;
  let userIdArray = dataArray.map((data) => data.userId);
  let set = new Set(userIdArray);
  const idArray = [...set];

  function userOnClick(e: any) {
    e.target;
  }

  function createHrefLink(id: number) {
    return `/user/${id}`;
  }

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
      {Arrow && (
        <div className="UsersDiv">
          {idArray.map((id) => (
            <Users
              key={id}
              user_id={id}
              customOnClick={userOnClick}
              href={createHrefLink(id)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Hero;
