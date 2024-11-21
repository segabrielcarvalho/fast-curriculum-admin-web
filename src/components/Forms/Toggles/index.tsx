'use client';

import { Description, Field, Label, Switch } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';

interface ToggleProps {
  label: string;
  description?: ReactNode;
  labelClassName?: string;
  descriptionClassName?: string;
  switchClassName?: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Toggle({
  label,
  description,
  labelClassName = 'text-sm font-medium leading-6 text-gray-900',
  descriptionClassName = 'text-sm text-gray-500',
  switchClassName = 'group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 data-[checked]:bg-primary-default',
  isChecked = false,
  onChange,
}: ToggleProps) {
  const [enabled, setEnabled] = useState(isChecked);

  const handleChange = (value: boolean) => {
    setEnabled(value);
    if (onChange) onChange(value);
  };

  return (
    <Field className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Label as="span" passive className={labelClassName}>
          {label}
        </Label>
        {description && (
          <Description as="span" className={descriptionClassName}>
            {description}
          </Description>
        )}
      </span>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={clsx(switchClassName)}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
    </Field>
  );
}
