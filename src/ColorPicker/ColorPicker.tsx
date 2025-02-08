import { useState } from "react";
import { SelectColors } from "../SelectColor";

export const ColorPicker = () => {
  const [color, setColor] = useState('gray');

  return (
    <div style={{ backgroundColor: color }}>
      <h2>Color picker</h2>
      <select value={color} onChange={(event) => setColor(event.target.value)}>
        <option>red</option>
        <option>green</option>
        <option>blue</option>
      </select>

      <SelectColors
        value={color}
        onChange={setColor}
        colors={[
          'red',
          'green',
          'blue'
        ]}
      />
    </div>
  );
}