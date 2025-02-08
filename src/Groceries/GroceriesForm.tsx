import { FormEventHandler, useContext, useState } from "react";
import { Context } from "../Context";


export const GroceriesForm =() => {
	const [groceryName, setGroceryName] = useState('');

	const {addItem} = useContext(Context);

		const handleSubmit: FormEventHandler = (event) => {
			event.preventDefault();
			addItem({ id: Date.now(), name: groceryName })
			setGroceryName('');
		};

		return (
				<form onSubmit={handleSubmit}>
					<label htmlFor="groceryName">
						Name: 
					</label>
					<input 
						id="groceryName"
						type="text"
						value={groceryName}
						onChange={(event) => setGroceryName(event.target.value)}
					/>
					<button
						type="submit"
					>
						Add
					</button>
				</form>
		)
}

