import { useState } from "react";
import { addRole } from "../services/api";

const RoleForm = ({ refreshRoles }) => {
  const [newRole, setNewRole] = useState({ name: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRole(newRole);
    refreshRoles(); // Llama a la función para actualizar la lista de roles
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Rol"
        onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descripción"
        onChange={(e) =>
          setNewRole({ ...newRole, description: e.target.value })
        }
      />
      <button type="submit">Agregar Rol</button>
    </form>
  );
};

export default RoleForm;
