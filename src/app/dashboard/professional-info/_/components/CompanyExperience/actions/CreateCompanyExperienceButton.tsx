import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import SelectInput from '@/components/Forms/SelectInput';
import Modal from '@/components/Modal';
import {
  CompanyExperienceTypeEnum,
  CreateCompanyExperienceMutationVariables,
  useCreateCompanyExperienceMutation,
} from '@/graphql/generated/graphql-types';
import useDisclosure from '@/hooks/useDisclosure';
import useToastHook from '@/hooks/useToastHook';
import getCompanyExperienceType from '@/utils/getCompanyExperienceType';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useProfessionalInfoContext } from '../../../context/ProfessionalInfo.context';

export const CreateCompanyExperienceButton = () => {
  const { error, success } = useToastHook();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { handleSubmit, control } =
    useForm<CreateCompanyExperienceMutationVariables>();
  const [submit, { loading }] = useCreateCompanyExperienceMutation();
  const {
    graphql: { professionalInfoQuery },
  } = useProfessionalInfoContext();
  const professionalInfoId =
    professionalInfoQuery.data?.getProfessionalInfoByUserId.id || '';

  const submitImplementation: SubmitHandler<
    CreateCompanyExperienceMutationVariables
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
      success({ message: 'Experiência adicionada com sucesso!' });
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
        Adicionar Experiência
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="top"
        size="xl"
        onOk={handleSubmit(submitImplementation)}
        title="Adicionar Experiência Profissional"
        description="Preencha os detalhes da experiência profissional que deseja adicionar. Certifique-se de que as informações estão corretas."
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
                label="Nome da Empresa"
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />

          <Controller
            control={control}
            name="data.role"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Cargo"
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />

          <Controller
            name="data.type"
            control={control}
            rules={{ required: 'Campo obrigatório' }}
            render={({ field, fieldState: { error } }) => (
              <SelectInput
                {...field}
                label="Tipo de Experiência"
                options={Object.values(CompanyExperienceTypeEnum).map(
                  value => ({
                    label: getCompanyExperienceType(value),
                    value: value,
                  }),
                )}
                error={error?.message}
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
                onChange={onChange}
                label="Data de Término"
                name={name}
                defaultValue={value as string}
                type="date"
              />
            )}
          />

          <Controller
            control={control}
            name="data.description"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Descrição"
                name={name}
                defaultValue={value as string}
              />
            )}
          />
        </div>
      </Modal>
    </>
  );
};
