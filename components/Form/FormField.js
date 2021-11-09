import React from "react";

function FormField({ title, name, type, textarea }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="font-light text-lg mb-3 block text-primary-700"
      >
        {title}
      </label>
      {textarea ? (
        <textarea
          rows={4}
          className="block outline-none border rounded md:shadow text-primary-800 pt-4 font-light leading-tight w-full px-3"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="block outline-none border rounded md:shadow text-primary-800 py-2 font-light leading-tight w-full px-3"
        />
      )}
    </div>
  );
}

export default FormField;