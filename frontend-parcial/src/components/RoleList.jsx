const RoleList = ({ roles }) => (
  <ul>
    {roles.map((role, index) => (
      <li key={index}>
        {role.name} - {role.description}
      </li>
    ))}
  </ul>
);

export default RoleList;
