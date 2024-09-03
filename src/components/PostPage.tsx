import { useState, useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostPage() {
  const [User, setUser]: any[] = useState([]);

  const { userId } = useParams();
  let posts: post[] = [];

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

  User.map((dataObj: post) => {
    if (dataObj.userId.toString() === userId) {
      posts = [...posts, dataObj];
    }
  });

  function userOnClick(e: any) {
    e.target;
  }

  function createHrefLink(id: number) {
    return `/user/${userId}/post/${id}`;
  }

  return (
    <>
      {
        <div className="UsersDiv">
          {posts.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              title={post.title}
              customOnClick={userOnClick}
              href={createHrefLink(post.id)}
            />
          ))}
        </div>
      }
    </>
  );
}

export default PostPage;
