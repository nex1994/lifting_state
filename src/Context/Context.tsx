import React, { PropsWithChildren, useContext, useMemo, useState } from 'react';

type RemoveItem = (itemId: number) => void;
type RenameItem = (itemId: number, name: string) => void;
type AddItem = (item: Item) => void;
type Item = {
  id: number;
  name: string;
};

type ContextValue = {
  items: Item[],
};
type ApiContextValue = {
  addItem: AddItem;
  removeItem: RemoveItem;
  renameItem: RenameItem; 
}

const ApiContext = React.createContext<ApiContextValue | null>(null);

const Context = React.createContext<ContextValue | null>(null);

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
    };
  }, [items])

  const apiValue = useMemo(() => {
    return {
      addItem,
      removeItem,
      renameItem,
    };
  }, []);



  return (
    <ApiContext.Provider value={apiValue}>
      <Context.Provider value={value}>{children}</Context.Provider>
    </ApiContext.Provider>
  );
};

export const useGroceries = () => {
  const value = useContext(Context)

  if (value === null) {
    throw new Error("Groceries not found");
  }

  return value;
}

export const useGroceriesApi = () => {
  const value = useContext(ApiContext);

  if (value === null) {
    throw new Error("GroceriesApi not found");
    
  }

  return value;
}