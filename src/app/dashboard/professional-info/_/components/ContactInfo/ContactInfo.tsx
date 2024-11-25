'use client';
import EmptyState from '@/components/EmptyState';
import Skeleton from '@/components/Skeleton/Default';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useProfessionalInfoContext } from '../../context/ProfessionalInfo.context';
import { UpsertProfessionalInfoButton } from './actions/UpsertProfessionalInfoButton';

const Field = ({
  label,
  value,
}: {
  label: string;
  value: string | undefined | null;
}) => (
  <div>
    <dt className="font-medium text-gray-900">{label}</dt>
    <dd className="mt-1 text-gray-700">{value ?? 'Não informado'}</dd>
  </div>
);

export const ContactInfo = () => {
  const {
    graphql: {
      professionalInfoQuery: { error, data, loading },
    },
  } = useProfessionalInfoContext();
  const row = data?.getProfessionalInfoByUserId.ContactInfo;

  if (error)
    return (
      <EmptyState
        title="Erro ao carregar informações de contato"
        description={error.message}
        icon={<ExclamationCircleIcon className="w-8 h-8 text-red-500" />}
      />
    );

  if (loading) return <Skeleton />;

  return (
    <div className="relative">
      <h2 className="text-base font-semibold text-gray-900">
        Informações de Contato
      </h2>
      <UpsertProfessionalInfoButton />
      <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm">
        <Field label="Telefone" value={row?.phone} />
        <Field label="Endereço" value={row?.address} />
        <Field label="Cidade" value={row?.city} />
        <Field label="Estado" value={row?.state} />
        <Field label="País" value={row?.country} />
        <Field label="LinkedIn" value={row?.linkedin} />
        <Field label="GitHub" value={row?.github} />
      </dl>
    </div>
  );
};
