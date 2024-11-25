import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  error?: FieldError | string | null;
  isRequired?: boolean;
  colorLabel?: string;
  fontWeightLabel?: string;
  fontSizeLabel?: string;
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    name,
    label,
    error = null,
    isRequired = false,
    colorLabel = 'text-gray-900',
    fontWeightLabel = 'font-medium',
    fontSizeLabel = 'text-sm',
    ...rest
  },
  ref,
) => {
  return (
    <div className="relative w-full">
      {!!label && (
        <label
          htmlFor={name}
          className={`block mb-1 ${fontSizeLabel} ${fontWeightLabel} ${colorLabel}`}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={name}
        name={name}
        className={`block w-full px-4 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500 
          transition duration-150 ease-in-out placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed ${
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : ''
          }`}
        {...rest}
      ></textarea>

      {!!error && (
        <p className="mt-1 text-sm text-red-500">
          {typeof error === 'string' ? error : error.message}
        </p>
      )}
    </div>
  );
};

const TextArea = forwardRef(TextAreaBase);
export default TextArea;
