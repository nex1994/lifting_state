import { FormEventHandler, useState } from "react";

type Props = {
	onDataReady: (item: { id: number, name: string }) => void
};
export const GroceriesForm =({ onDataReady }: Props) => {
	const [groceryName, setGroceryName] = useState('');

		const handleSubmit: FormEventHandler = (event) => {
			event.preventDefault();
			onDataReady({ id: Date.now(), name: groceryName })
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

