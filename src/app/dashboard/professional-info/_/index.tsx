import SectionHeading from '@/components/SectionHeading';
import { CompanyExperience } from './components/CompanyExperience/CompanyExperience';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';

export const ProfessionalInfo = () => {
  return (
    <div className="mx-auto lg:gap-x-16 lg:px-8">
      <SectionHeading
        title="Informações Profissionais"
        description="Aqui estão as informações profissionais do seu currículo"
      />
      <main className="px-4 sm:px-6 mt-5 lg:flex-auto lg:px-0">
        <div className="mx-auto max-w-4xl space-y-8 lg:mx-0 lg:max-w-none">
          <ContactInfo />
          <CompanyExperience />
          <Education />
          <Skills />
          {/* <Certifications /> */}
        </div>
      </main>
    </div>
  );
};
