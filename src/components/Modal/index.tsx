'use client';

import Button from '@/components/Forms/Button';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ModalProps {
  title?: string;
  customFooter?: ReactNode;
  image?: string;
  children: ReactNode;
  onOk?: () => void;
  onClose?: () => void;
  isOpen: boolean;
  showCloseButton?: boolean;
  buttonsLabel?: {
    cancel: string;
    confirm: string;
  };
  closeOnOverlayClick?: boolean;
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
}

const sizeClasses: Record<string, string> = {
  xs: 'sm:max-w-xs sm:min-w-xs',
  sm: 'sm:max-w-sm sm:min-w-sm',
  md: 'sm:max-w-md sm:min-w-md',
  lg: 'sm:max-w-lg sm:min-w-lg',
  xl: 'sm:max-w-xl sm:min-w-xl',
  '2xl': 'sm:max-w-2xl sm:min-w-2xl',
  '3xl': 'sm:max-w-3xl sm:min-w-3xl',
  '4xl': 'sm:max-w-4xl sm:min-w-4xl',
  '5xl': 'sm:max-w-5xl sm:min-w-5xl',
  '6xl': 'sm:max-w-6xl sm:min-w-6xl',
  '7xl': 'sm:max-w-7xl sm:min-w-7xl',
  full: 'sm:max-w-full sm:min-w-full',
};

const Modal = ({
  title = 'Informação',
  customFooter,
  image,
  children,
  onOk,
  onClose,
  isOpen,
  size = 'md',
  buttonsLabel,
  closeOnOverlayClick = true,
}: ModalProps) => {
  const handleClose = () => {
    if (closeOnOverlayClick && onClose) onClose();
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <DialogBackdrop className="fixed inset-0 bg-neutral-base-black bg-opacity-30 transition-opacity" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel
          className={`relative max-h-full w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ${sizeClasses[size]}`}
        >
          <div className="flex flex-col h-full">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                {image && (
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Image
                      src={image}
                      alt="Imagem descritiva sobre o modal"
                      className="h-6 w-6 text-red-600"
                      width={48}
                      height={48}
                    />
                  </div>
                )}
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="font-semibold text-2xl leading-6 text-gray-900 "
                  >
                    {title}
                  </DialogTitle>
                  <div
                    className="mt-8 h-auto overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    style={{ maxHeight: 'calc(100vh - 200px)' }}
                  >
                    {children}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {customFooter ? (
                customFooter
              ) : (
                <div
                  className={`flex justify-center space-x-3 sm:justify-end ${onOk ? 'sm:space-x-3' : ''}`}
                >
                  <Button
                    className="rounded-md"
                    type="button"
                    variant="outline"
                    color="primary"
                    onClick={onClose}
                  >
                    {buttonsLabel?.cancel || 'Cancelar'}
                  </Button>
                  <Button
                    className="rounded-md px-3"
                    type="button"
                    variant="solid"
                    onClick={onOk || onClose}
                  >
                    {buttonsLabel?.confirm || 'Confirmar'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
