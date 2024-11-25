import { TrashIcon } from '@heroicons/react/24/outline';
import moment from 'moment';

export const Certifications = () => {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">Certificações</h2>
      <ul className="mt-6 space-y-6">
        {[
          {
            name: 'AWS Certified Solutions Architect',
            issuingOrganization: 'Amazon Web Services',
            issueDate: '2022-01-01',
            expirationDate: null,
          },
          {
            name: 'Microsoft Certified: Azure Developer Associate',
            issuingOrganization: 'Microsoft',
            issueDate: '2021-03-01',
            expirationDate: '2024-03-01',
          },
        ].map((certification, index) => (
          <li
            key={index}
            className="relative flex flex-col gap-y-2 border border-gray-200 rounded-lg p-4"
          >
            <TrashIcon
              className="absolute top-2 right-2 w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500"
              title="Remover"
            />
            <div className="text-lg font-semibold text-gray-900">
              {certification.name}
            </div>

            <div className="text-sm font-medium text-indigo-600">
              {certification.issuingOrganization}
            </div>

            <div className="text-sm text-gray-500">
              Emitido em{' '}
              {moment(certification.issueDate).format('MMM/YYYY').toUpperCase()}{' '}
              -{' '}
              {certification.expirationDate
                ? `Expira em ${moment(certification.expirationDate)
                    .format('MMM/YYYY')
                    .toUpperCase()}`
                : 'Sem Expiração'}
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
      >
        Adicionar Certificação
      </button>
    </div>
  );
};
