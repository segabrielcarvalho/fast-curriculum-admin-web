import { PhotoIcon } from '@heroicons/react/24/outline';

interface FileInputProps {
  label: string;
  description?: string;
  uploadText?: string;
  dragAndDropText?: string;
  supportedFormats?: string;
  maxSize?: string;
}

export const FileInput = ({
  label,
  description = '',
  uploadText = 'Envie um arquivo',
  dragAndDropText = 'ou arraste e solte',
  supportedFormats = 'PNG, JPG, GIF',
  maxSize = '10MB',
}: FileInputProps) => {
  return (
    <div className="col-span-full w-full">
      <label
        htmlFor="file-upload"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      {description && (
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      )}
      <div className="mt-2 flex-1 flex w-full justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
        <div className="text-center">
          <PhotoIcon
            aria-hidden="true"
            className="mx-auto size-12 text-gray-300"
          />
          <div className="mt-4 flex text-sm/6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 hover:text-primary-500"
            >
              <span>{uploadText}</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">{dragAndDropText}</p>
          </div>
          <p className="text-xs/5 text-gray-600">
            {supportedFormats}, até {maxSize}
          </p>
        </div>
      </div>
    </div>
  );
};
