import { useState } from 'react';
import { PeopleCounter } from '../PeopleCounter';

export const Party = () => {
	
	

	const [students, setStudents] = useState(0);
	const [employees, setEmployees] = useState(0);

	const total: number = students + employees;

	const incrementStudents = () => {
		setStudents(x => x + 1);
	};

	const decrementStudents = () => {
		setStudents(x => x - 1);
	};

	const incrementEmployees = () => {
		setEmployees(x => x + 1);
	};

	const decrementEmployees = () => {
		setEmployees(x => x - 1);
	};

	return (
			<div>
					<h2>Mate Party</h2>
					<PeopleCounter 
						title="Students" 
						count={students} 
						increment={incrementStudents} 
						decrement={decrementStudents}/>
					<PeopleCounter 
						title="Employees"
						count={employees}
						increment={incrementEmployees}
						decrement={decrementEmployees} />
					<p>Total:
						{' '}
						{total}
					</p>
			</div>
	);
};