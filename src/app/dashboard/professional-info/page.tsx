import { ProfessionalInfo } from './_';
import { ProfessionalInfoContextProvider } from './_/context/ProfessionalInfo.context';

export default function ProfessionalInfoPage() {
  return (
    <ProfessionalInfoContextProvider>
      <ProfessionalInfo />
    </ProfessionalInfoContextProvider>
  );
}
