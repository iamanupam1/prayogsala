import React from "react";
import Link from "next/link";

const Button = ({ href = "#", text = "Click Me", bgColor = "bg-gray-900", hoverColor = "hover:bg-gray-800" }) => {
  return (
    <Link href={href} passHref>
      <button className={`${bgColor} cursor-pointer text-white px-6 py-3 rounded-lg font-semibold ${hoverColor}`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
