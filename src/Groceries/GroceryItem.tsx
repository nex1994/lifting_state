// import { useEffect, useRef, useState } from "react";
import { GroceryEditForm } from "./GroceryEditForm";

type Props = {
  item: {
    id: number;
    name: string;
  };
  remove: (id: number) => void;
  rename: (itemId: number, newName: string) => void;
};


export const GroceryItem = ({ rename, remove, item }: Props) => {
  
  

  return (
    <>
      {item.name}
      <button type="button" onClick={() => remove(item.id)}>
        Remove
      </button>
      <button type="button" onClick={() => rename(item.id, `${item.name}!!!`)}>
        Make important
      </button>
      <GroceryEditForm item={item} rename={rename} key={item.name} />{" "}
    </>
  );
};