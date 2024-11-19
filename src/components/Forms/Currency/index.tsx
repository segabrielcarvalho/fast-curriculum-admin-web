import React, { useEffect, useState } from 'react';

export interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  initialValue: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function CurrencyInput({
  initialValue,
  onChange,
  label,
  ...rest
}: CurrencyInputProps) {
  const [value, setValue] = useState<number>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = Number(
      inputValue.replace(/[^0-9,]/g, '').replace(',', '.') || 0,
    );
    setValue(numericValue);
    onChange(event);
  };

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">R$</span>
        </div>
        <input
          id="price"
          name="price"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="0.00"
          aria-describedby="price-currency"
          className="block w-full rounded-md border-0 py-1.5 pl-9 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-default sm:text-sm sm:leading-6"
          {...rest}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span id="price-currency" className="text-gray-500 sm:text-sm">
            BRL
          </span>
        </div>
      </div>
    </div>
  );
}
