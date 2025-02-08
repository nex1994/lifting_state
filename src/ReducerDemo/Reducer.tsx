import { useReducer } from "react";

type Action = 'increment' | 'decrement';

const reducer = (state: number, action: Action) => {
  console.log(action)

  if (action === 'increment') {
    state = state + 1;
  }

  if (action === 'decrement') {
    state = state - 1;
  }

  return state;
}

export const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  // const [count, setCount] = useState(0);

  const increment = () => {
    dispatch('increment');
  };

  const decrement = () => {
    dispatch('decrement');
  }

  return (
    <div>
      <h2>Reducer demo</h2>
      <p>
        Value:
        {' '}
        <strong>{count}</strong>
      </p>
      <p>
        <button
          type="button"
          onClick={() => increment()}
        >
          Increment
        </button>
        
        <button
          type='button'
          onClick={() => decrement()}
        >
          Decrement
        </button>
      </p>
    </div>
  )
};