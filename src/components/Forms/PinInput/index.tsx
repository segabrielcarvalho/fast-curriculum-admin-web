import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface PinInputProps {
  length: number;
  value: string;
  onChange: (value: string) => void;
}

const PinInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  PinInputProps
> = ({ length, value, onChange }, ref) => {
  const [inputValues, setInputValues] = useState(Array(length).fill(''));

  useEffect(() => {
    const newValues = Array(length)
      .fill('')
      .map((_, i) => value[i] || '');
    setInputValues(newValues);
  }, [value, length]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const val = e.target.value;
    if (/^[0-9]?$/.test(val)) {
      const newValues = [...inputValues];
      newValues[index] = val;
      setInputValues(newValues);
      onChange(newValues.join(''));

      if (val && index < length - 1) {
        const nextSibling = document.getElementById(`pin-input-${index + 1}`);
        if (nextSibling) {
          (nextSibling as HTMLInputElement).focus();
        }
      }
    }
  };

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const paste = e.clipboardData.getData('text');
      if (/^\d+$/.test(paste)) {
        const newValues = paste.split('').slice(0, length);
        setInputValues(newValues);
        onChange(newValues.join(''));
      }
      e.preventDefault();
    },
    [length, onChange],
  );

  return (
    <div className="flex space-x-2">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          id={`pin-input-${index}`}
          type="text"
          maxLength={1}
          value={inputValues[index]}
          onChange={e => handleChange(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-secondary-default"
          ref={index === 0 ? ref : null}
        />
      ))}
    </div>
  );
};

const PinInput = forwardRef(PinInputBase);
export default PinInput;
