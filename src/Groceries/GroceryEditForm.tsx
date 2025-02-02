import { FormEventHandler, useState } from "react";

type Props = {
  item: {
    id: number;
    name: string;
  };
  rename: (itemId: number, newName: string) => void;

};

export const GroceryEditForm = ({ item, rename }: Props) => {
  const [newName, setNewName] = useState(item.name);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    rename(item.id, newName);
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

