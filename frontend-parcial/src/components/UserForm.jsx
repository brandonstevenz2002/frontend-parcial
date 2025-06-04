import { useState, useEffect } from "react";
import { addUser, getRoles } from "../services/api"; // Importa la función para obtener roles

const UserForm = ({ refreshUsers }) => {
  const [roles, setRoles] = useState([]); // Estado para almacenar roles disponibles
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    identification: "",
    email: "",
    role: "",
  });

  // Obtener los roles existentes al cargar el formulario
  useEffect(() => {
    getRoles().then((res) => setRoles(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: No permitir envío con campos vacíos
    if (
      !newUser.firstName ||
      !newUser.lastName ||
      !newUser.identification ||
      !newUser.email ||
      !newUser.role
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      console.log("Enviando usuario:", newUser); // Verifica los datos antes de enviarlos
      const response = await addUser(newUser); // Enviar al backend

      console.log("Respuesta del servidor:", response.data);

      if (response.data.error) {
        alert("Error: " + response.data.error);
      } else {
        refreshUsers(); // Actualizar lista después de agregar usuario
        setNewUser({
          firstName: "",
          lastName: "",
          identification: "",
          email: "",
          role: "",
        }); // Limpiar formulario
      }
    } catch (error) {
      console.error("Error al agregar usuario", error);
      alert("Ocurrió un error al agregar el usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={newUser.firstName}
        onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Apellido"
        value={newUser.lastName}
        onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Identificación"
        value={newUser.identification}
        onChange={(e) =>
          setNewUser({ ...newUser, identification: e.target.value })
        }
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        required
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        required
      >
        <option value="" disabled>
          Selecciona un rol
        </option>
        {roles.map((role) => (
          <option key={role.name} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default UserForm;
