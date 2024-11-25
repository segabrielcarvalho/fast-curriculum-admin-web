import { CompanyExperienceTypeEnum } from '../graphql/generated/graphql-types';

const CompanyExperienceType: { [key in CompanyExperienceTypeEnum]: string } = {
  [CompanyExperienceTypeEnum.Contractor]: 'Contratado',
  [CompanyExperienceTypeEnum.Freelancer]: 'Freelancer',
  [CompanyExperienceTypeEnum.FullTime]: 'Tempo Integral',
  [CompanyExperienceTypeEnum.Internship]: 'Estágio',
  [CompanyExperienceTypeEnum.Outsourced]: 'Terceirizado',
  [CompanyExperienceTypeEnum.PartTime]: 'Meio Período',
  [CompanyExperienceTypeEnum.Temporary]: 'Temporário',
  [CompanyExperienceTypeEnum.Trainee]: 'Trainee',
  [CompanyExperienceTypeEnum.Volunteer]: 'Voluntário',
};

const getCompanyExperienceType = (key?: string | null) => {
  if (!key) return '-';
  const label = CompanyExperienceType[key as CompanyExperienceTypeEnum];
  return label || key;
};

export default getCompanyExperienceType;
