import React from 'react';
import './Button.css';

function Button({ label }) {
  return (
    <div data-testid="button" className="ButtonStyle">
      {label}
    </div>
  );
}

export default Button;
