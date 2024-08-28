// src/components/TextInput.js
import React from "react";

const TextInput = ({ name,label, placeholder, value, onChange, type = "text", className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-white text-sm font-bold mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="border border-gray-100 bg-white text-gray-400 p-2 rounded w-full"
      />
    </div>
  );
};

export default TextInput;
