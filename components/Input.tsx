import React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isError?: boolean;
  errorMessage?: string;
  label: string;
}

function Input({ label, errorMessage, isError, ...props }: InputProps) {
  return (
    <div className="form-control">
      <label className="label">
        <span
          className={`label-text ${isError ? "text-red-600" : "text-gray-700"}`}
        >
          {label}
        </span>
      </label>
      <input {...props} />
      {isError ? (
        <p className="text-red-600 text-xs my-1">{errorMessage}</p>
      ) : null}
    </div>
  );
}
export default Input;
