'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useAuthContext } from '../../../contexts/Auth/AuthContext';
import classNames from '../../../utils/classNames';
import { Can } from '../../Can';
import { getNavigation } from '../constants';

export function NavMenu({ isHovered }: { isHovered: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const { user } = useAuthContext();
  const query = { userId: user?.id || userId };
  const navigation = getNavigation(query);

  return (
    <ul role="list" className="-mx-2 space-y-3">
      {navigation.map(item => {
        const isCurrent = pathname === item.href;

        return (
          <Can roles={item.roles} key={item.name}>
            <li>
              {!isHovered && (
                <Link
                  href={item.href}
                  className={classNames(
                    isCurrent
                      ? 'bg-gray-100 text-primary-default'
                      : 'text-neutral-700 hover:bg-gray-100 hover:text-primary-default',
                    'group flex items-center justify-center gap-x-3 rounded-md p-4 text-sm font-semibold leading-6',
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      isCurrent
                        ? 'text-primary-default'
                        : 'text-neutral-600 group-hover:text-primary-default',
                      'h-6 w-6 shrink-0',
                    )}
                  />
                </Link>
              )}

              {isHovered && (
                <Link
                  href={item.href}
                  className={classNames(
                    isCurrent
                      ? 'bg-gray-100 text-primary-default'
                      : 'text-neutral-700 hover:bg-gray-100 hover:text-primary-default',
                    'group flex items-center justify-start gap-x-3 rounded-md p-4 text-sm font-semibold leading-6 w-full',
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      isCurrent
                        ? 'text-primary-default'
                        : 'text-neutral-600 group-hover:text-primary-default',
                      'h-6 w-6 shrink-0',
                    )}
                  />
                  <span className="flex-grow transition-all duration-300 ease-in-out">
                    {item.name}
                  </span>
                </Link>
              )}
            </li>
          </Can>
        );
      })}
    </ul>
  );
}
