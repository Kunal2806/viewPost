import { Link } from "react-router-dom";

export interface Props {
  user_id: number;
  customOnClick: any;
  href: string;
}
function UsersCard(props: Props) {
  return (
    <Link className="user" onClick={props.customOnClick} to={props.href}>
      <img src="./image/user.jpg" />
      <p className="usersTest">user_Id = {props.user_id} </p>
    </Link>
  );
}

export default UsersCard;
