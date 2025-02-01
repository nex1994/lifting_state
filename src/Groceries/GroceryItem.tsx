import { useEffect, useRef, useState } from "react";
import { GroceryEditForm } from "./GroceryEditForm";

type Props = {
  item: {
    id: number;
    name: string;
  };
  remove: (id: number) => void;
  rename: (itemId: number, newName: string) => void;
};

type Mode = 'view' | 'edit';

export const GroceryItem = ({ rename, remove, item }: Props) => {
  
  const [mode, setMode] = useState<Mode>('view');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if ( mode === 'edit') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [mode])

  return (
    <>
      {item.name}
      <button type="button" onClick={() => setMode("edit")}>
        Edit
      </button>
      <button type="button" onClick={() => remove(item.id)}>
        Remove
      </button>
      {mode === "edit" && (
        <dialog ref={dialogRef}>
          <GroceryEditForm
            item={item}
            rename={rename}
            onCancel={() => setMode("view")}
          />
        </dialog>
      )}{" "}
    </>
  );
};