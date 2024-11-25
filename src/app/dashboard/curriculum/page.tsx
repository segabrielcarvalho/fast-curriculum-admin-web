'use client';
import SectionHeading from '@/components/SectionHeading';
import Table from '@/components/Table';
import routes from '@/routes';
import moment from 'moment';
import { useRouter } from 'next/navigation';

const DatasetsPage = () => {
  const router = useRouter();
  return (
    <div>
      <SectionHeading
        title="Gerenciamento de Currículos"
        description="Aqui você pode visualizar, editar e gerenciar os currículos criados."
        primaryButton={{
          label: 'Criar Novo Currículo',
          onClick: () => router.push(routes.dashboard.curriculums.create.path),
        }}
      />

      <Table
        onAction={data => router.push(`/curriculums/${data.id}`)}
        columns={[
          {
            header: 'Título',
            render: data => (
              <div className="w-full text-start text-sm font-medium text-gray-900">
                {data.title}
              </div>
            ),
          },
          {
            header: 'Empresa',
            render: data => (
              <div className="w-full text-start text-sm font-normal text-gray-700">
                {data.company || 'N/A'}
              </div>
            ),
          },

          {
            header: 'Criado em',
            render: data => (
              <div className="flex flex-col items-start">
                <div className="text-sm font-normal text-gray-700">
                  {moment(data.createdAt).format('DD/MM/YYYY')}
                </div>
                <div className="text-xs font-light text-gray-500">
                  {moment(data.createdAt).fromNow()}
                </div>
              </div>
            ),
          },
        ]}
        data={[
          {
            id: 1,
            title: 'Front-End Developer',
            company: 'Tech Corp',
            isPublic: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            cvUrl: 'https://example.com/curriculum/1',
          },
          {
            id: 2,
            title: 'Back-End Developer',
            company: 'Dev Solutions',
            isPublic: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            cvUrl: 'https://example.com/curriculum/2',
          },
        ]}
      />
    </div>
  );
};

export default DatasetsPage;
