import { useParams } from "react-router-dom";
import Data from "./Data/data.json";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function userpage() {
  const { userId } = useParams();
  let posts: post[] = [];

  Data.map((dataObj) => {
    if (dataObj.userId.toString() === userId) {
      posts = [...posts, dataObj];
    }
  });

  return (
    <>
      <div className="UsersDiv">
        {posts.map((post) => (
          <p className="style">{post.id}</p>
        ))}
      </div>
    </>
  );
}

export default userpage;
