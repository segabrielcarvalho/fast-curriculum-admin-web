'use client';

import Button from '@/components/Forms/Button';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  renderDivider?: boolean;
  primaryButton?: {
    label?: string;
    onClick?: () => void;
    component?: ReactNode;
  };
  secondaryButton?: {
    label?: string;
    onClick?: () => void;
    component?: ReactNode;
  };
}
export default function SectionHeading({
  title,
  description,
  primaryButton,
  secondaryButton,
  renderDivider = true,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'sm:flex sm:items-center sm:justify-between',
        renderDivider && 'border-b border-gray-200 pb-6',
      )}
    >
      <div>
        <h2 className="text-xl font-semibold leading-6 text-gray-900">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        {secondaryButton?.component
          ? secondaryButton.component
          : secondaryButton?.label && (
              <Button
                className="rounded-md px-6"
                type="button"
                variant="outline"
                color="primary"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.label}
              </Button>
            )}
        {primaryButton?.component
          ? primaryButton.component
          : primaryButton?.label && (
              <Button
                type="button"
                variant="solid"
                color="primary"
                className="ml-3 rounded-md px-7"
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </Button>
            )}
      </div>
    </div>
  );
}
