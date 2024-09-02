import { useParams } from "react-router-dom";
import Data from "./Data/data.json";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function userpage() {
  const { id } = useParams();
  let posts: post[] = [];

  Data.map((dataObj) => {
    if (dataObj.id.toString() === id) {
      posts = [...posts, dataObj];
    }
  });
  return (
    <>
      {posts.map((post) => (
        <div>
          <div className="HeroTitle">
            <div className="Heroh1">user</div>
            <div className="Heroh2">
              <h1>Id - {post.userId} </h1>
              <h1>Post - {id}</h1>
            </div>
          </div>
          <div className="mainPost">
            <div className="title">
              <h1> {post.title}</h1>
            </div>
            <div className="body">
              <h3>{post.body}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default userpage;
