import { useEffect, useState } from "react";
import { getTodo, getUser } from "./services";

type Props = {
  userId: number;
}

type Todo = {
    "userId": number;
    "id": number;
    "title": string;
    "completed": boolean;
  }


type User = {
  id: number;
  name: string;
  email: string;
};

export const UserInfo = ({ userId }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<Todo[] | null>(null)

  useEffect(() => {
    const loadData = async () => {
      setUser(null);
      getUser(userId).then((data) => {
        setUser(data);
      });
      getTodo(userId).then((data) => {
        setTodos(data);
      });
    }
    loadData();
    
  },[userId])

  return (
    <div style={{ border: "3px solid black", paddingLeft: 10, flexGrow: 1 }}>
      <h3>User Info</h3>
      <ul>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
      </ul>
      <h3>Todos</h3>
      <ul>
        {todos?.map(todo => {
          return (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} disabled></input>
                {todo.title}
              </li>
          );
        })}
      </ul>
    </div>
  );
}