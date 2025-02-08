import { useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  colors: string[];
}

export const SelectColors = ({ value, onChange, colors }: Props) => {
  const [isOpen, setIsOpen ] =useState(false);
  const select = (color: string) => {
    setIsOpen(false)
    onChange(color)
  }

  return (
    <span style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Select color:
        {value}
      </button>
      { isOpen && 
      <ul style={{ 
        position: 'absolute', bottom: 0, left: 0, margin: 0, padding: 0, transform: 'translateY(100%)'
      }}>
        {colors.map(color => {
          return (
            <li
              key={color}
              style={{
                backgroundColor: "white",
                color,
                listStyle: "none",
                // padding: 10,
              }}
              onClick={() => onChange(color)}
            >
              <button
                type="button"
                onClick={() => select(color)}
                style={{
                  color,
                  display: 'block',
                  width: 100,
                  fontWeight: color === value ? 'bolder' : 'normal'
                }}
              >
                {color}
              </button>
            </li>
          );
        })}
      </ul>}
    </span>
  );
};