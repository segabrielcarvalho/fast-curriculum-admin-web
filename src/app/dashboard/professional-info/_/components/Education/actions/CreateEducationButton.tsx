import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import Modal from '@/components/Modal';
import {
  CreateEducationMutationVariables,
  useCreateEducationMutation,
} from '@/graphql/generated/graphql-types';
import useDisclosure from '@/hooks/useDisclosure';
import useToastHook from '@/hooks/useToastHook';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useProfessionalInfoContext } from '../../../context/ProfessionalInfo.context';

export const CreateEducationButton = () => {
  const { error, success } = useToastHook();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { handleSubmit, control } = useForm<CreateEducationMutationVariables>();
  const [submit, { loading }] = useCreateEducationMutation();
  const {
    graphql: { professionalInfoQuery },
  } = useProfessionalInfoContext();
  const professionalInfoId =
    professionalInfoQuery.data?.getProfessionalInfoByUserId.id || '';

  const submitImplementation: SubmitHandler<
    CreateEducationMutationVariables
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
      success({ message: 'Formação acadêmica adicionada com sucesso!' });
      professionalInfoQuery.refetch();
      onClose();
    } catch (e: any) {
      console.error(e);
      error({ message: e.message });
    }
  };

  return (
    <>
      <Button onClick={onOpen} variant="unstyled" color="blue">
        Adicionar Formação
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="top"
        size="xl"
        onOk={handleSubmit(submitImplementation)}
        title="Adicionar Formação Acadêmica"
        description="Preencha os detalhes da sua formação acadêmica. Certifique-se de que as informações estão corretas antes de salvar."
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
            name="data.institution"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Instituição"
                placeholder='Ex: "UniEVANGÉLICA"'
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />

          <Controller
            control={control}
            name="data.degree"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Grau Acadêmico"
                placeholder='Ex: "Bacharelado"'
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />

          <Controller
            control={control}
            name="data.studyArea"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                placeholder='Ex: "Engenharia de Software"'
                label="Área de Estudo"
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />

          <Controller
            control={control}
            name="data.startAt"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Data de Início"
                name={name}
                defaultValue={value as string}
                type="date"
                isRequired
              />
            )}
          />

          <Controller
            control={control}
            name="data.endAt"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                placeholder="Deixe em branco se ainda estiver cursando"
                onChange={onChange}
                label="Data de Término"
                name={name}
                defaultValue={value as string}
                type="date"
              />
            )}
          />
        </div>
      </Modal>
    </>
  );
};
