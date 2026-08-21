import Listusers from "./Data";
import Users from "./Users";

function GetUser() {
  //   const { name, email, position, age } = users;
  return (
    <div>
      {Listusers.map((user) => (
        <Users key={user.id} {...user} />
      ))}
    </div>
  );
}

export default GetUser;
