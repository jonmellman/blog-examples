import { useEffect, useState } from 'react';
import * as api from './api';
import { User } from '../shared-types/UsersApi';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const load = async () => {
      setUsers(await api.getUsers());
    };
    load();
  }, []);

  return (
    <div>
      Hello World -
      {' '}
      {JSON.stringify(users)}
      <ol>
        {users.map((user) => <li>{user.name}</li>)}
      </ol>
    </div>
  );
};
