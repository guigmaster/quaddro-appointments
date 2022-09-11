import type { InputHTMLAttributes } from 'react';

interface TextInputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage?: string;
}

export default function TextInput({
  name,
  label,
  errorMessage,
  ...rest
}: TextInputPros) {
  const hasError = errorMessage && errorMessage.trim().length > 0;

  return (
    <div className="flex flex-1 flex-col">
      <label
        htmlFor={name}
        className={`text-2md text-zinc-600 ${hasError && 'text-red-500'}`}
      >
        {label}
      </label>
      <div
        className={`w-full h-9 border rounded border-gray-300 bg-white overflow-hidden focus:border-blue-500 ${
          hasError ? 'border-red-500' : ''
        }`}
      >
        <input
          {...rest}
          type="text"
          name={name}
          className={`w-full h-full px-2 text-zinc-600 ${
            hasError && 'text-red-500'
          }`}
        />
      </div>
      {hasError && <span className="text-sm text-red-500">{errorMessage}</span>}
    </div>
  );
}
