import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function PostCard() {
  const [User, setUser]: any[] = useState([]);
  const { userId, id } = useParams();

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
    if (dataObj.id.toString() === id) {
      posts = [...posts, dataObj];
    }
  });
  return (
    <>
      <div>
        <div className="HeroTitle">
          <div className="Heroh1">user</div>
          <div className="Heroh2">
            <h1>User Id - {userId} </h1>
            <h1>Post - {id}</h1>
          </div>
        </div>

        {posts.map((post: post) => (
          <div className="mainPost" key={post.id}>
            <div className="title">
              <h1> {post.title}</h1>
            </div>
            <div className="body">
              <h3>{post.body}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostCard;
