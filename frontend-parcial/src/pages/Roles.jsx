import { useState, useEffect } from "react";
import { getRoles, addRole } from "../services/api";
import styled from "styled-components";

const RolesContainer = styled.div`
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

const RolesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const RoleItem = styled.li`
  font-size: 18px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", description: "" });

  useEffect(() => {
    getRoles().then((res) => setRoles(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRole(newRole);
    getRoles().then((res) => setRoles(res.data));
    setNewRole({ name: "", description: "" }); // Limpiar el formulario después de enviar
  };

  return (
    <RolesContainer>
      <Title>Gestión de Roles</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre del Rol"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Descripción"
          value={newRole.description}
          onChange={(e) =>
            setNewRole({ ...newRole, description: e.target.value })
          }
        />
        <Button type="submit">Agregar Rol</Button>
      </Form>
      <RolesList>
        {roles.map((role, index) => (
          <RoleItem key={index}>
            <strong>{role.name}</strong>: {role.description}
          </RoleItem>
        ))}
      </RolesList>
    </RolesContainer>
  );
};

export default Roles;
