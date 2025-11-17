"use client";
import React, { useState } from "react";
import { downArrow } from "../icons/Icons";

const Dropdown = ({ title, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex text-sm justify-center items-center w-full leading-normal border-l border-gray-200 pl-2 sm:pl-3 text-black"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title} {downArrow}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute z-[1] right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 capitalize tracking-wider"
                role="menuitem"
                onClick={() => setIsOpen(false)} // Close dropdown on selection
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
