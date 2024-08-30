export interface Props {
  user_id: number;
}
function Users(props: Props) {
  return (
    <div className="user">
      <img src="./image/user.jpg" />
      <p className="usersTest">user_Id = {props.user_id} </p>
    </div>
  );
}

export default Users;
