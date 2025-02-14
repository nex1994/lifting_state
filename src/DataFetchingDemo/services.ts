export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
  return await response.json();
};

export const getUser = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  
  return await response.json();
};

export const getTodo = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
  
  return await response.json();
};