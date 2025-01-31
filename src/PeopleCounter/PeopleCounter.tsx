import { useState } from "react"

type Props = {
	title: string;
	count: number;
	increment: () => void;
	decrement: () => void;
}

export const PeopleCounter = ({ title, count, increment, decrement }: Props) => {
	

	return (
		<div>
			<p>
				{title}
				:
				{' '}
				<button
					type="button"
					onClick={increment}
				>
					+
				</button>
				{' '}
				{count}
				{' '}
				<button
					type="button"
					onClick={decrement}
				>
					-
				</button>
			</p>
		</div>
	)
}