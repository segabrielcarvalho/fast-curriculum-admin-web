'use client';
import Divider from '@/components/Divider';
import moment from 'moment';
import { useProfessionalInfoContext } from '../../context/ProfessionalInfo.context';
import { CreateCompanyExperienceButton } from './actions/CreateCompanyExperienceButton';
import { DeleteCompanyExperienceButton } from './actions/DeleteComapanyExperienceButton';

export const CompanyExperience = () => {
  const {
    graphql: {
      professionalInfoQuery: { data },
    },
  } = useProfessionalInfoContext();

  const row = data?.getProfessionalInfoByUserId.Companies || [];
  const sortedCompanies = row.sort(
    (a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime(),
  );

  if (sortedCompanies.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-2 w-full flex-1">
        <p className="text-sm text-gray-500">
          Nenhuma experiência profissional cadastrada
        </p>
        <CreateCompanyExperienceButton />
        <Divider />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">
        Experiência Profissional
      </h2>
      <ul className="mt-6 space-y-6">
        {sortedCompanies.map((company, index) => (
          <li
            key={index}
            className="relative flex flex-col gap-y-2 border border-gray-200 rounded-lg p-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {company.role}
                </div>
                <div className="text-sm font-medium text-primary-600">
                  {company.name}
                </div>
              </div>
              <div className="flex items-center gap-x-2 text-sm text-gray-500 sm:text-right">
                <div className="text-sm text-gray-500 sm:text-right">
                  {moment(company.startAt).format('MMM/YYYY').toUpperCase()} -{' '}
                  {company.endAt
                    ? moment(company.endAt).format('MMM/YYYY').toUpperCase()
                    : 'Atual'}
                </div>
                <DeleteCompanyExperienceButton companyId={company.id} />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">{company.description}</p>
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-4 space-x-3 ">
        <CreateCompanyExperienceButton />
      </div>
    </div>
  );
};
