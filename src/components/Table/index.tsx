import Divider from '@/components/Divider';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

type Column<T> = {
  render: (data: T) => JSX.Element;
  header: string;
  alwaysVisible?: boolean;
  width?: string;
};

interface DynamicTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onAction?: (item: T) => void;
}

const Table = <T,>({
  data,
  columns,
  onAction,
}: DynamicTableProps<T>): JSX.Element => {
  return (
    <div>
      <div className="flex justify-between py-3 pl-3">
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`${
              column.alwaysVisible
                ? ''
                : `hidden ${colIndex === 0 ? 'md:flex' : 'lg:flex'}`
            }`}
            style={{
              flex: column.width ? `0 0 ${column.width}` : '1 1 0%',
            }}
          >
            <span className="font-medium text-start w-full text-primary-default">
              {column.header}
            </span>
          </div>
        ))}
        <div className="w-5"></div>
      </div>
      <Divider />
      <ul role="list" className="divide-y divide-gray-100 pl-3">
        {data.map((row, rowIndex) => (
          <li key={rowIndex} className="relative flex justify-between py-5">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`${
                  column.alwaysVisible
                    ? ''
                    : `hidden ${colIndex === 0 ? 'md:flex' : 'lg:flex'}`
                }`}
                style={{
                  flex: column.width ? `0 0 ${column.width}` : '1 1 0%',
                }}
              >
                <div className="w-full text-start">{column.render(row)}</div>
              </div>
            ))}
            <ChevronRightIcon
              aria-hidden="true"
              className="h-5 w-5 flex-none text-gray-400 cursor-pointer hover:text-gray-600 hover:scale-105 transform transition-transform active:scale-95"
              onClick={() => onAction && onAction(row)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
