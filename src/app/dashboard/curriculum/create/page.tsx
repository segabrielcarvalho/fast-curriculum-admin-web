'use client';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import TextArea from '@/components/Forms/TextArea';
import SectionHeading from '@/components/SectionHeading';
import routes from '@/routes';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  CreateCurriculumMutationVariables,
  useCreateCurriculumMutation,
} from '../../../../graphql/generated/graphql-types';
import useToastHook from '../../../../hooks/useToastHook';

export default function CreateDatasetPage() {
  const router = useRouter();
  const { error, success } = useToastHook();
  const [submit, { loading }] = useCreateCurriculumMutation();
  const { control, reset, handleSubmit } =
    useForm<CreateCurriculumMutationVariables>();

  const downloadPDF = (base64: string, filename: string) => {
    const link = document.createElement('a');
    const blob = new Blob(
      [Uint8Array.from(atob(base64), c => c.charCodeAt(0))],
      { type: 'application/pdf' },
    );
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const submitImplementation: SubmitHandler<
    CreateCurriculumMutationVariables
  > = async args => {
    try {
      const response = await submit({
        variables: {
          data: { ...args.data },
        },
      });
      if (response.data?.createCurriculum) {
        success({ message: 'Currículo criado com sucesso.' });
        downloadPDF(response.data.createCurriculum, 'curriculo.pdf');
        // reset();
        // router.push(routes.dashboard.curriculums.path);
      }
    } catch (e) {
      console.error(e);
      error({ message: 'Erro ao criar currículo.' });
    }
  };

  return (
    <form
      className="space-y-8 w-full"
      onSubmit={handleSubmit(submitImplementation)}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
        <div>
          <SectionHeading
            title="Criação de Currículo"
            description="Complete as informações para gerar um currículo profissional e personalizado."
          />
        </div>

        <div className="grid grid-cols-1 gap-y-6">
          <Controller
            control={control}
            name="data.title"
            render={({ field: { name, onChange, ref, value } }) => (
              <Input
                ref={ref}
                onChange={onChange}
                label="Título"
                placeholder='Ex: "Desenvolvedor Front-End"'
                name={name}
                defaultValue={value as string}
                isRequired
              />
            )}
          />

          <Controller
            control={control}
            name="data.jobDescription"
            render={({ field: { name, onChange, ref } }) => (
              <TextArea
                name={name}
                ref={ref}
                label="Descrição da Vaga"
                isRequired
                autoComplete="off"
                onChange={onChange}
              />
            )}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-3">
        <Button
          variant="outline"
          color="primary"
          type="button"
          className="rounded-md px-5"
          onClick={() => router.push(routes.dashboard.curriculums.path)}
        >
          Cancelar
        </Button>
        <Button
          variant="solid"
          color="primary"
          className="rounded-md px-12"
          type="submit"
          isLoading={loading}
        >
          Criar
        </Button>
      </div>
    </form>
  );
}
