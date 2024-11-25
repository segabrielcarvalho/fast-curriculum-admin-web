import Alert from '@/components/Alert';
import { useDeleteCompanyExperienceMutation } from '@/graphql/generated/graphql-types';
import useDisclosure from '@/hooks/useDisclosure';
import useToastHook from '@/hooks/useToastHook';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useProfessionalInfoContext } from '../../../context/ProfessionalInfo.context';

export const DeleteCompanyExperienceButton = ({
  companyId,
}: {
  companyId: string;
}) => {
  const disclosure = useDisclosure();
  const { error, success } = useToastHook();
  const {
    graphql: { professionalInfoQuery },
  } = useProfessionalInfoContext();
  const [submit, { loading }] = useDeleteCompanyExperienceMutation();

  const submitImplementation = async () => {
    try {
      await submit({ variables: { deleteCompanyExperienceId: companyId } });
      professionalInfoQuery.refetch();
      disclosure.onClose();
      success({ message: 'Experiência excluída com sucesso!' });
    } catch (e: any) {
      console.error(e);
      error({ message: e.message });
    }
  };

  return (
    <>
      <TrashIcon
        onClick={disclosure.onOpen}
        className="absolute top-2 right-2 w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500"
        title="Remover"
      />
      <Alert
        title="Excluir Experiência Profissional"
        description="Tem certeza que deseja excluir essa experiência profissional? Essa ação não poderá ser desfeita."
        disclosure={disclosure}
        type="error"
        confirmButton={{
          label: 'Excluir',
          loading,
          onConfirm: submitImplementation,
        }}
      />
    </>
  );
};
