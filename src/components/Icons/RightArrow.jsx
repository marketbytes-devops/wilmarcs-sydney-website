import React from "react";

const RightArrow = ({color = "white",className}) => {
  return (
    <div>
      <svg
        width="45"
        height="15"
        viewBox="0 0 45 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M44.7071 8.07039C45.0976 7.67986 45.0976 7.0467 44.7071 6.65617L38.3431 0.292213C37.9526 -0.0983109 37.3195 -0.0983109 36.9289 0.292213C36.5384 0.682738 36.5384 1.3159 36.9289 1.70643L42.5858 7.36328L36.9289 13.0201C36.5384 13.4107 36.5384 14.0438 36.9289 14.4343C37.3195 14.8249 37.9526 14.8249 38.3431 14.4343L44.7071 8.07039ZM0 7.36328V8.36328H44V7.36328V6.36328H0V7.36328Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default RightArrow;
