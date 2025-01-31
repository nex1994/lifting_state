import { useState } from "react";
import { GroceriesForm } from "./GroceriesForm";
import { GroceriesList } from "./GroceriesList";

export const Groceries =() => {
    const [items, setItems] = useState([
			{
        id: 1,
        name: 'Bread',
    	},
			{
				id: 2,
				name: 'Cheese',
			},
			{
				id: 3,
				name:'Soda',
			},
    ]);

		const addItem = (item: { id: number, name: string }) => {
			setItems(current => current.concat(item))
		}

		const removeItem = (id: number) => {
			setItems(current => current.filter((item) => {
				return item.id !== id
			}))
		}

		return (
			<div>
				<h2>Groceries</h2>

				<GroceriesForm onDataReady={addItem}/>
				<h2>Added items</h2>
				<GroceriesList items={items} remove={removeItem}/>
			</div>
		)
}

