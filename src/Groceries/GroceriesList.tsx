import { GroceryItem } from "./GroceryItem";

type Props = {
  items: {
    id: number;
    name: string;
  }[];
  remove: (id: number) => void;
  rename: (itemId: number, newName: string) => void
}

export const GroceriesList = ({ items, remove, rename }: Props) => {
    return (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <GroceryItem remove={remove} rename={rename} item={item}/>
              </li>
            );
          })}
        </ul>
    )
}