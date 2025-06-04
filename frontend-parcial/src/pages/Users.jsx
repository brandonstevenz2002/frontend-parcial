import { useState, useEffect } from "react";
import { getUsers, addUser } from "../services/api";
import styled from "styled-components";

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #2c3e50, #34495e);
  color: #ecf0f1;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  transition: 0.3s;
  background-color: #ecf0f1;
  color: #2c3e50;

  &:focus {
    background-color: #bdc3c7;
  }
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color: #1abc9c;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background-color: #16a085;
  }
`;

const UsersList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const UserItem = styled.li`
  font-size: 18px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    identification: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(newUser);
    getUsers().then((res) => setUsers(res.data));
  };

  return (
    <UsersContainer>
      <Title>Usuarios</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre"
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Apellido"
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Identificación"
          onChange={(e) =>
            setNewUser({ ...newUser, identification: e.target.value })
          }
        />
        <Input
          type="email"
          placeholder="Correo"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Rol"
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <Button type="submit">Agregar Usuario</Button>
      </Form>
      <UsersList>
        {users.map((user, index) => (
          <UserItem key={index}>
            {user.firstName} {user.lastName} - {user.role}
          </UserItem>
        ))}
      </UsersList>
    </UsersContainer>
  );
};

export default Users;
