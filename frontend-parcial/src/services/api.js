import axios from "axios";

const API_URL = "http://localhost:3000";

export const getRoles = async () => axios.get(`${API_URL}/roles/list`);
export const addRole = async (role) => axios.post(`${API_URL}/roles/add`, role);
export const getUsers = async () => axios.get(`${API_URL}/users/list`);
export const addUser = async (user) =>
  axios.post(`http://localhost:3000/users/add`, user);
