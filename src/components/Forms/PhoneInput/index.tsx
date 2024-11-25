import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  inputLeftAddons?: ReactNode | string;
  inputRightAddons?: ReactNode | string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    placeholder,
    error,
    isRequired = false,
    inputLeftAddons,
    inputRightAddons,
    ...rest
  },
  ref,
) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          aria-required={isRequired}
          required={isRequired}
          className={`block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-default sm:text-sm sm:leading-6 ${
            inputLeftAddons ? 'rounded-l-none' : ''
          } ${inputRightAddons ? 'rounded-r-none' : ''}`}
          {...rest}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <QuestionMarkCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

const PhoneInput = forwardRef(InputBase);
export default PhoneInput;
