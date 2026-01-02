import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  style = {}, 
  ...rest   // ← This captures ALL other props (onMouseEnter, className, etc.)
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.2s ease',
      ...style,
    }}
    {...rest}   // ← This forwards onMouseEnter, onMouseLeave, className, etc.
  >
    {children}
  </button>
);

export default Button;