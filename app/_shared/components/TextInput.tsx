import type { InputHTMLAttributes } from 'react';

interface TextInputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function TextInput({ name, label, ...rest }: TextInputPros) {
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={name} className="text-2md text-zinc-600">
        {label}
      </label>
      <div className="w-full h-9 border rounded border-gray-300 bg-white overflow-hidden focus:border-blue-500">
        <input
          {...rest}
          type="text"
          name={name}
          className="w-full h-full px-2 text-zinc-600"
        />
      </div>
    </div>
  );
}
