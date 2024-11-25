'use client';

import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import Modal from '@/components/Modal';
import {
  UpdateContactInfoMutationVariables,
  useUpdateContactInfoMutation,
} from '@/graphql/generated/graphql-types';
import useDisclosure from '@/hooks/useDisclosure';
import useToastHook from '@/hooks/useToastHook';
import { PencilIcon } from '@heroicons/react/24/outline';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useProfessionalInfoContext } from '../../../context/ProfessionalInfo.context';

export const UpsertProfessionalInfoButton = () => {
  const {
    graphql: { professionalInfoQuery },
  } = useProfessionalInfoContext();
  const row =
    professionalInfoQuery.data?.getProfessionalInfoByUserId.ContactInfo;
  const { error, success } = useToastHook();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { control, register, setValue, handleSubmit } =
    useForm<UpdateContactInfoMutationVariables>({
      defaultValues: {
        data: {
          phone: row?.phone,
          address: row?.address,
          city: row?.city,
          state: row?.state,
          country: row?.country,
          github: row?.github,
          linkedin: row?.linkedin,
        },
      },
    });

  const [submit, { loading }] = useUpdateContactInfoMutation();

  const submitImplementation: SubmitHandler<
    UpdateContactInfoMutationVariables
  > = async data => {
    await submit({
      variables: {
        where: { id: row?.id as string },
        data: data.data,
      },
    });
    professionalInfoQuery.refetch();
    success({ message: 'Informações de contato atualizadas com sucesso!' });
    onClose();
    try {
    } catch (e: any) {
      console.error(e);
      error({ message: e.message });
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        className="w-full justify-end"
        color="blue"
        variant="unstyled"
      >
        Editar
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        position="top"
        size="lg"
        onOk={handleSubmit(submitImplementation)}
        title="Atualizar Informações de Contato"
        description="Atualize os seus dados de contato de forma rápida e fácil. Certifique-se de que todas as informações estão corretas antes de salvar."
        image={<PencilIcon className="w-5 h-5 text-blue-500" />}
        closeOnOverlayClick={false}
        buttonsLabel={{
          cancel: 'Cancelar',
          confirm: 'Salvar alterações',
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 items-center justify-center">
          <Controller
            control={control}
            name="data.phone"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Telefone"
                name={name}
                defaultValue={value as string}
              />
            )}
          />

          <Controller
            control={control}
            name="data.address"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Endereço"
                name={name}
                defaultValue={value as string}
              />
            )}
          />

          <Controller
            control={control}
            name="data.city"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Cidade"
                name={name}
                defaultValue={value as string}
              />
            )}
          />
          <Controller
            control={control}
            name="data.state"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Estado"
                name={name}
                defaultValue={value as string}
              />
            )}
          />
          <Controller
            control={control}
            name="data.country"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="País"
                name={name}
                defaultValue={value as string}
              />
            )}
          />
          <Controller
            control={control}
            name="data.github"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="GitHub"
                name={name}
                defaultValue={value as string}
              />
            )}
          />
          <Controller
            control={control}
            name="data.linkedin"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="LinkedIn"
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
