import { useState, useEffect } from "react";
import UsersCard from "./UsersCard";

function DisplayUSer() {
  const [User, setUser]: any[] = useState([]);
  const [Arrow, setArrow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          return Error("data fetch error");
        }

        return res.json();
      })
      .then((data) => setUser(data));
  }, []);
  const userIdArray = User.map((user: any) => user.userId);
  const userIdSet = new Set(userIdArray);
  const userIdArrayDist = [...userIdSet];

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
          {userIdArrayDist.map((id: any) => (
            <UsersCard
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

export default DisplayUSer;
