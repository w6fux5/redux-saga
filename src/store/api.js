import axios from 'axios';

const url = 'http://localhost:5000';

export const loadUsersApi = async () => {
  const users = await axios.get(`${url}/users`);
  return users;
};

export const createUsersApi = async (user) => {
  const response = await axios.post(`${url}/users`, user);
  return response;
};

export const deleteUsersApi = async (userID) => {
  const response = await axios.delete(`${url}/users/${userID}`);
  return response;
};

export const updateUsersApi = async (userInfo) => {
  const response = await axios.put(`${url}/users/${userInfo?.id}`, userInfo);
  return response;
};
