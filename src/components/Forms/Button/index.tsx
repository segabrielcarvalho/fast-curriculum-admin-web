import clsx from 'clsx';
import Link from 'next/link';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-normal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-md py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 text-[0.84rem]',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 text-[0.84rem]',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white text-[0.84rem]',
    primary:
      'bg-neutral-base-black ring-primary-default text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:outline-primary-default text-[0.84rem]',
    secondary:
      'bg-secondary-default text-black hover:bg-secondary-700 active:bg-secondary-800 focus-visible:outline-secondary-default text-[0.84rem]',
    error:
      'bg-error-default text-white hover:bg-error-200 active:bg-error-300 focus-visible:outline-error-default text-[0.84rem]',
  },
  outline: {
    slate:
      'text-[0.84rem] ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'text-[0.84rem] ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    primary:
      'text-[0.84rem] ring-primary-default text-primary-default hover:ring-primary-700 hover:bg-gray-100 active:ring-primary-800 focus-visible:outline-primary-default',
    secondary:
      'text-[0.84rem] ring-secondary-default text-secondary-default hover:ring-secondary-700 active:ring-secondary-800 focus-visible:outline-secondary-default',
    error:
      'text-[0.84rem] ring-red-600 text-red-600 hover:ring-red-500 active:ring-red-700 focus-visible:outline-red-600',
  },
};

type ButtonProps = (
  | {
      variant?: 'solid';
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: 'outline';
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined;
      })
  ) & {
    isLoading?: boolean;
    isDisabled?: boolean;
  };

export default function Button({
  className,
  isLoading,
  isDisabled,
  children,
  ...props
}: ButtonProps) {
  props.variant ??= 'solid';
  props.color ??= 'slate';

  const disabled = isLoading || isDisabled;

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
    disabled && 'opacity-75 cursor-not-allowed',
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} disabled={disabled}>
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  ) : (
    <Link className={className} {...props}>
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </Link>
  );
}
