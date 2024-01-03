import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: Readonly<InputProps>) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        {...props}
        className="bg-white w-full rounded-lg border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 transition-all outline-gray-800"
        placeholder=" "
      />

      <label
        htmlFor={inputId}
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
}
