type Props = {
  items: {
    id: number;
    name: string;
  }[];
  remove: (id: number) => void;
}

export const GroceriesList = ({ items, remove }: Props) => {
    return (
        <ul>
          {items.map((item) => {
            return (
              <li 
                key={item.id}
              >
                {item.name} 
                <button type="button" onClick={() => remove(item.id)}>
                  Remove
                </button>
              </li>
            )
          })}
        </ul>
    )
}