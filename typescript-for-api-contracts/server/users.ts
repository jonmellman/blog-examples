/* eslint-disable @typescript-eslint/no-use-before-define */
import express from 'express';
import { GetUserApi, GetUsersApi } from '../shared-types/UsersApi';

export const usersRouter = express.Router();

usersRouter.get<
  GetUserApi['PathParams'],
  GetUserApi['ResponseBody']
>('/api/users/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await dao.getUser(userId);

  res.status(200).json(user);
});

usersRouter.get<
  GetUsersApi['PathParams'],
  GetUsersApi['ResponseBody'],
  GetUsersApi['RequestBody'],
  GetUsersApi['QueryParams']
>('/api/users', async (req, res) => {
  const users = await dao.getUsers();

  res.status(200).json(users);
});

const dao = {
  getUsers: async () => [{
    userId: 1,
    name: 'Alice',
  }, {
    userId: 2,
    name: 'Bob',
  }],
  getUser: async (userId: number) => ({
    userId,
    name: 'Alice',
  }),
};
