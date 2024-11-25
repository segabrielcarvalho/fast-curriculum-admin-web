'use client';
import Divider from '@/components/Divider';
import moment from 'moment';
import { useProfessionalInfoContext } from '../../context/ProfessionalInfo.context';
import { CreateEducationButton } from './actions/CreateEducationButton';
import { DeleteEducationButton } from './actions/DeleteEducationButton';

export const Education = () => {
  const {
    graphql: {
      professionalInfoQuery: { data },
    },
  } = useProfessionalInfoContext();

  const row = data?.getProfessionalInfoByUserId.Educations || [];
  const sortedEducations = row.sort(
    (a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
  );

  if (sortedEducations.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-2 w-full flex-1">
        <p className="text-sm text-gray-500">
          Nenhuma Formação Acadêmica encontrada
        </p>
        <CreateEducationButton />
        <Divider />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">
        Formação Acadêmica
      </h2>
      <ul className="mt-6 space-y-6">
        {sortedEducations.map((education, index) => (
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
                <DeleteEducationButton educationId={education.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2 mt-4">
        <CreateEducationButton />
      </div>
    </div>
  );
};
