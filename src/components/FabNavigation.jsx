import React from "react";
import { FaAngleUp } from "react-icons/fa";

const FabNavigation = () => {
  return (
    <div
      className="fixed bottom-24 right-5 border-2 border-secondary bg-primary text-white p-4 rounded-full shadow-xl hover:text-dark hover:border-primary hover:bg-secondary "
      style={{ zIndex: 9999 }}
    >
      <a href="#navbar">
        <FaAngleUp size={30} />
      </a>
    </div>
  );
};

export default FabNavigation;
