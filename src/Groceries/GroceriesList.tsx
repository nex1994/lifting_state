import { useContext } from "react";
import { GroceryItem } from "./GroceryItem";
import { Context } from "../Context";



export const GroceriesList = () => {
    const {removeItem, renameItem, items} = useContext(Context);
    return (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <GroceryItem remove={removeItem} rename={renameItem} item={item}/>
              </li>
            );
          })}
        </ul>
    )
}