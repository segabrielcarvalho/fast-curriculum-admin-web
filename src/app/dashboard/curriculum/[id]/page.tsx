'use client';
import ImageGrid from '@/components/Grid/Images';
import SectionHeading from '@/components/SectionHeading';
import { useParams, useRouter } from 'next/navigation';
import { CreateFileButton } from './_/components/CreateFileButton';

const DatasetsPage = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <div className="space-y-12 w-full">
      <SectionHeading
        title="Detalhes da Pasta"
        description="Aqui você pode visualizar e gerenciar os arquivos disponíveis na pasta."
        primaryButton={{ component: <CreateFileButton /> }}
      />
      <ImageGrid number={50} gridColl={7} />
    </div>
  );
};

export default DatasetsPage;
