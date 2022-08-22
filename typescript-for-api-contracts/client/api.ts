import axios from 'axios';
import { GetUserApi, User } from '../shared-types/UsersApi';

export const getUser = async (userId: number): Promise<User> => {
  const { data } = await axios.get<GetUserApi['ResponseBody']>(`/api/users/${userId}`);
  return data;
};

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>('/api/users');
  return data;
};
