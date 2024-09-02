import { Link } from "react-router-dom";
export interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
  customOnClick: any;
  href: string;
}

function Post(props: Props) {
  return (
    <>
      <Link className="UserPost" onClick={props.customOnClick} to={props.href}>
        <h5>Post {props.id}</h5>
        <p> {props.title} </p>
      </Link>
    </>
  );
}

export default Post;
