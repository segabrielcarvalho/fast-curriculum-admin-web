'use client';
import { useAuthContext } from '@/contexts/Auth/AuthContext';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

type NavigationItem = {
  name: string;
  href?: string;
  onClick?: () => void;
};

const Header = ({ onOpen }: { onOpen: () => void }) => {
  const { signOut, user } = useAuthContext();
  const userNavigation: NavigationItem[] = [
    { name: 'Seu Perfil', href: '#' },
    { name: 'Sair', onClick: () => signOut(true) },
  ];

  return (
    <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onOpen}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>

      <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch justify-end lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          />

          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Abrir Menu de Usuário</span>
              <span className="hidden lg:flex lg:items-center">
                <span
                  aria-hidden="true"
                  className="ml-4 text-md font-semibold leading-6 text-gray-900"
                >
                  {user?.name}
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 text-gray-400"
                />
              </span>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
            >
              {userNavigation.map(item => (
                <MenuItem
                  className="hover:bg-gray-100"
                  key={item.name}
                  as="div"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block px-3 py-1 text-sm leading-6 text-gray-900"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      onClick={item.onClick}
                      className="block w-full text-left px-3 py-1 text-sm leading-6 text-gray-900 "
                    >
                      {item.name}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
