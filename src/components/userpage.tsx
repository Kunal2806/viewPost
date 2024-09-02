import { useParams } from "react-router-dom";
import Data from "./Data/data.json";

import Post from "./Post";

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

  function userOnClick(e: any) {
    console.log(e);
    console.log(userId);
  }

  function createHrefLink(id: number) {
    return `/post/${id}`;
  }
  return (
    <>
      <div className="HeroTitle">
        <div className="Heroh1">User-{userId}</div>
      </div>

      <div className="PostDiv">
        {posts.map((post, index) => (
          <Post
            key={index}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
            customOnClick={userOnClick}
            href={createHrefLink(post.id)}
          />
        ))}
      </div>
    </>
  );
}

export default userpage;
