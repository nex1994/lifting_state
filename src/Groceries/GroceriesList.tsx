import { memo } from "react";
import { GroceryItem } from "./GroceryItem";
import { useGroceries, useGroceriesApi } from "../Context";



export const GroceriesList = memo(() => {
    const {removeItem, renameItem} = useGroceriesApi();
    const { items } = useGroceries()
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
});