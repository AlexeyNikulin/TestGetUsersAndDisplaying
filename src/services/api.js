import axios from 'axios';

export const getUsers = async () => {
  const res = await axios.get('https://reqres.in/api/users');
  return res.data;
};
