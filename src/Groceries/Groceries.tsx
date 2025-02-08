import { GroceriesForm } from "./GroceriesForm";
import { GroceriesList } from "./GroceriesList";
import { GroceriesProvider } from "../Context";

export const Groceries =() => {
    
		return (
      <div>
        <GroceriesProvider>
          <h2>Groceries</h2>

          <GroceriesForm  />
          <h2>Added items</h2>
            <GroceriesList/>
        </GroceriesProvider>
      </div>
    );
}

