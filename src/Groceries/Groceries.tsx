import { GroceriesForm } from "./GroceriesForm";
import { GroceriesList } from "./GroceriesList";
import { GroceriesProvider } from "../Context";
import { useState } from "react";

export const Groceries =() => {
    const [showForm, setShowForm] = useState(true);

		return (
      <div>
        <GroceriesProvider>
          <h2>Groceries</h2>

          <button type="button" onClick={() => setShowForm((x) => !x)}>
            Toggle form
          </button>
          {showForm && <GroceriesForm />}

          <h2>Added items</h2>
          <GroceriesList />
        </GroceriesProvider>
      </div>
    );
}

