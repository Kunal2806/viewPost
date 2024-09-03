import { Link } from "react-router-dom";

export interface Props {
  id: number;
  title: string;
  customOnClick: any;
  href: any;
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
