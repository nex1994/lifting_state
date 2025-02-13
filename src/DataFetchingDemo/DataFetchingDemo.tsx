import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
}

export const DataFetchingDemo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    }

    loadTodos();
    
  },[])

 

  return (
    <div>
      <h2>Data fetching demo</h2>
      {todos.map(todo => {
        return (
          <>
            <h5 key={todo.id}>{todo.title}</h5>
            <p>{todo.userId}</p>
            {' '}
          </>
        );
      })}
    </div>
  );
};
