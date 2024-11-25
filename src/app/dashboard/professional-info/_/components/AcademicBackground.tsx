import { TrashIcon } from '@heroicons/react/24/outline';
import moment from 'moment';

export const AcademicBackground = () => {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">
        Formação Acadêmica
      </h2>
      <ul className="mt-6 space-y-6">
        {[
          {
            institution: 'Universidade de São Paulo (USP)',
            degree: 'Bacharelado em Ciência da Computação',
            studyArea: 'Tecnologia da Informação',
            startAt: '2015-01-01',
            endAt: '2019-12-31',
          },
          {
            institution: 'Faculdade Exemplo',
            degree: 'Curso de Especialização',
            studyArea: 'Desenvolvimento Web',
            startAt: '2020-01-01',
            endAt: '2021-12-31',
          },
        ].map((education, index) => (
          <li
            key={index}
            className="relative flex flex-col gap-y-2 border border-gray-200 rounded-lg p-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {education.institution}
                </div>
                <div className="text-sm font-medium text-primary-600">
                  {education.degree} em {education.studyArea}
                </div>
              </div>
              <div className="flex items-center gap-x-2 text-sm text-gray-500 sm:text-right">
                <div className="text-sm text-gray-500 sm:text-right">
                  {moment(education.startAt).format('YYYY')} -{' '}
                  {moment(education.endAt).format('YYYY')}
                </div>
                <TrashIcon
                  className="absolute top-2 right-2 w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500"
                  title="Remover"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
      >
        Adicionar Formação
      </button>
    </div>
  );
};
