import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from '../../Logo';
import { NavMenu } from '../NavMenu';

export const MobileSideBar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 lg:hidden">
      <TransitionChild
        enter="transition-opacity duration-500 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
      </TransitionChild>

      <div className="fixed inset-0 flex">
        <TransitionChild
          enter="transform transition-transform duration-500 ease-in-out"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition-transform duration-500 ease-in-out"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-500 ease-in-out">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button type="button" onClick={onClose} className="-m-2.5 p-2.5">
                <span className="sr-only">Fechar SideBar</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                <Logo className="h-5 mt-4 mx-auto w-auto" />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <NavMenu isHovered={true} />
                  <li className="mt-auto">
                    <a
                      href="#"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      <Cog6ToothIcon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-blue-600"
                      />
                      Configurações
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
};
