'use client';
import Alert from '@/components/Alert';
import { useDeleteSkillMutation } from '@/graphql/generated/graphql-types';
import useToastHook from '@/hooks/useToastHook';
import { useProfessionalInfoContext } from '../../../context/ProfessionalInfo.context';

export const DeleteSkill = ({
  skillId,
  isOpen,
  onClose,
}: {
  skillId: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { error, success } = useToastHook();
  const {
    graphql: { professionalInfoQuery },
  } = useProfessionalInfoContext();
  const [submit, { loading }] = useDeleteSkillMutation();

  const submitImplementation = async () => {
    try {
      await submit({ variables: { deleteSkillId: skillId } });
      professionalInfoQuery.refetch();
      onClose();
      success({ message: 'Habilidade excluída com sucesso!' });
    } catch (e: any) {
      console.error(e);
      error({ message: e.message });
    }
  };

  return (
    <>
      <Alert
        title="Excluir Habilidade"
        description="Tem certeza que deseja excluir essa Habilidade? Essa ação não poderá ser desfeita."
        disclosure={{ isOpen, onClose }}
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
