import React, { PropsWithChildren, useContext, useMemo, useReducer } from 'react';

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

type AddItemAction = {
  type: 'addItem';
  payload: {
    item: Item
  }
}

type RemoveItemAction = {
  type: 'removeItem';
  payload: {
    id: number
  }
};

type RenameItemAction = {
  type: 'renameItem',
  payload: {
    itemId: number,
    newName: string
  }
}

type Action = AddItemAction | RemoveItemAction | RenameItemAction;

type State = {
  items: Item[];
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addItem': 
      return {
        ...state,
        items: state.items.concat(action.payload.item),
      }
    case 'removeItem':
      return {
        ...state,
        items: state.items.filter((item) => {
        return item.id !== action.payload.id;
      })
      }
    case 'renameItem':
      return {
        ...state,
        items: state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            name: action.payload.newName,
          };
        }
        return item;
      })
      }
    
    default: 
      return state
  }
}

export const GroceriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    items: [
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
    ],
  });
  

  const addItem = (item: { id: number; name: string }) => {
    dispatch({ type: 'addItem', payload: { item } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'removeItem', payload: { id } })
  };

  const renameItem = (itemId: number, newName: string) => {
    dispatch({ type: 'renameItem', payload: { itemId, newName  } })
  };

  const value = state;
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