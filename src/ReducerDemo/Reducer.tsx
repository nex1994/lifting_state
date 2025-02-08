import { useReducer } from "react";

type Action = 'increment' | 'decrement';
type State = {
  count: number;
  title: string;
}

const reducer = (state: State, action: Action) => {
  console.log(action)

  switch (action) {
    case "increment": {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case "decrement": {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default: {
      return state
    }
  } 
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, title: 'My app'})
  // const [count, setCount] = useState(0);

  const increment = () => {
    dispatch('increment');
  };

  const decrement = () => {
    dispatch('decrement');
  }

  return (
    <div>
      <h2>Reducer demo {state.title}</h2>
      <p>
        Value:
        {' '}
        <strong>{state.count}</strong>
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