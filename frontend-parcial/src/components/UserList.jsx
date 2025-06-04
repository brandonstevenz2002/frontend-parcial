const UserList = ({ users }) => (
  <ul>
    {users.map((user, index) => (
      <li key={index}>
        {user.firstName} {user.lastName} - {user.role}
      </li>
    ))}
  </ul>
);

export default UserList;
