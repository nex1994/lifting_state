import React, { PropsWithChildren, useMemo, useState } from 'react';

type RemoveItem = (itemId: number) => void;
type RenameItem = (itemId: number, name: string) => void;
type AddItem = (item: Item) => void;
type Item = {
  id: number;
  name: string;
};

type ContextValue = {
  removeItem: RemoveItem,
  renameItem: RenameItem,
  addItem: AddItem,
  items: Item[],
};

export const Context = React.createContext<ContextValue>({
  removeItem: () => {},
  renameItem: () => {},
  addItem: () => {},
  items: [],
});

type Props = PropsWithChildren

export const GroceriesProvider = ({ children }: Props) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Bread",
    },
    {
      id: 2,
      name: "Cheese",
    },
    {
      id: 3,
      name: "Soda",
    },
  ]);

  const addItem = (item: { id: number; name: string }) => {
    setItems((current) => current.concat(item));
  };

  const removeItem = (id: number) => {
    setItems((current) =>
      current.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const renameItem = (itemId: number, newName: string) => {
    setItems((current) => {
      return current.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            name: newName,
          };
        }
        return item;
      });
    });
  };

  const value = useMemo(() => {
    return {
      items,
      addItem,
      removeItem,
      renameItem,
    };
  }, [items])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
};