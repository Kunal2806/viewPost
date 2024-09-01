export interface Props {
  user_id: number;
  customOnClick: any;
  href: string;
}
function Users(props: Props) {
  return (
    <a className="user" onClick={props.customOnClick} href={props.href}>
      <img src="./image/user.jpg" />
      <p className="usersTest">user_Id = {props.user_id} </p>
    </a>
  );
}

export default Users;
