import { useEffect, useState } from "react";
import { getUsers } from "./services";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  selectedUserId: number | null;
  setSelectedUserId: (id: number | null) => void;
}

export const UsersTable = ({ selectedUserId, setSelectedUserId }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    loadUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>
                {user.id === selectedUserId ? (
                  <strong>{user.name}</strong>
                ) : (
                  <p>{user.name}</p>
                )}
              </th>
              <th>{user.email}</th>
              <th>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedUserId(selectedUserId === user.id ? null : user.id);
                  }}
                >
                  select
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};