import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => (await axios.get(API_URL)).data;
export const createUser = async (user) => (await axios.post(API_URL, user)).data;
export const editUser = async (user) => (await axios.put(`${API_URL}/${user.id}`, user)).data;
export const removeUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
