'use client';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import Modal from '@/components/Modal';
import {
  CreateSkillMutationVariables,
  useCreateSkillMutation,
} from '@/graphql/generated/graphql-types';
import useDisclosure from '@/hooks/useDisclosure';
import useToastHook from '@/hooks/useToastHook';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useProfessionalInfoContext } from '../../../context/ProfessionalInfo.context';

export const CreateSkillButton = () => {
  const { error, success } = useToastHook();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { handleSubmit, control, reset } =
    useForm<CreateSkillMutationVariables>();
  const [submit, { loading }] = useCreateSkillMutation();
  const {
    graphql: { professionalInfoQuery },
  } = useProfessionalInfoContext();
  const professionalInfoId =
    professionalInfoQuery.data?.getProfessionalInfoByUserId.id || '';

  const submitImplementation: SubmitHandler<
    CreateSkillMutationVariables
  > = async args => {
    try {
      await submit({
        variables: {
          data: {
            ...args.data,
            ProfessionalInfo: { connect: { id: professionalInfoId } },
          },
        },
      });
      success({ message: 'Habilidade adicionada com sucesso!' });
      professionalInfoQuery.refetch();
      onClose();
      reset();
    } catch (e: any) {
      console.error(e);
      error({ message: e.message });
    }
  };

  return (
    <>
      <Button onClick={onOpen} variant="unstyled" color="blue">
        Adicionar Habilidade
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="top"
        size="xl"
        onOk={handleSubmit(submitImplementation)}
        title="Adicionar Habilidade"
        description="Preencha o nome da Habilidade. Certifique-se de que as informações estão corretas antes de salvar."
        image={<PlusIcon className="w-5 h-5 text-blue-500" />}
        closeOnOverlayClick={false}
        buttonsLabel={{
          cancel: 'Cancelar',
          confirm: 'Salvar',
        }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 items-center justify-center">
          <Controller
            control={control}
            name="data.name"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Nome da Habilidade"
                placeholder='Ex: "ReactJS"'
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />
        </div>
      </Modal>
    </>
  );
};
