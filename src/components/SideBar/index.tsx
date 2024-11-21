'use client';
import images from '@/assets';
import Image from 'next/image';
import { useState } from 'react';
import { Logo } from '../Logo';
import { MobileSideBar } from './MobileSideBar';
import { NavMenu } from './NavMenu';

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <MobileSideBar isOpen={isOpen} onClose={onClose} />

      <div
        className={`cursor-pointer fixed inset-y-0 left-0 z-50 hidden lg:flex w-[5.6rem] hover:w-72 flex-col bg-white transition-all duration-200 ease-in-out ${
          isHovered ? 'lg:w-72' : 'lg:w-[5.6rem]'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex grow flex-col gap-y-5 overflow-hidden border-r border-gray-200 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-center">
            {isHovered ? (
              <Logo className="h-9 mt-4 mx-auto w-auto" />
            ) : (
              <Image
                src={images.logos.mark.src}
                alt="Logo"
                width={120}
                height={120}
              />
            )}
          </div>
          <nav className="flex flex-1 flex-col">
            <ul
              role="list"
              className="flex flex-1 flex-col items-center lg:items-start gap-y-7"
            >
              <li className="mt-2 w-full flex-1">
                <NavMenu isHovered={isHovered} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
