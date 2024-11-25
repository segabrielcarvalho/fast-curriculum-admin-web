'use client';
import Button from '@/components/Forms/Button';
import { FileInput } from '@/components/Forms/FileInput';
import Input from '@/components/Forms/Input';
import ImageGrid from '@/components/Grid/Images';
import SectionHeading from '@/components/SectionHeading';
import useToastHook from '@/hooks/useToastHook';
import routes from '@/routes';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  url: z.string().url('URL inválida').min(3, 'Item obrigatório'),
});

export default function CreateDatasetPage() {
  const router = useRouter();
  const { success, error } = useToastHook();
  // const [submit, { loading }] = useCreateShortenedLinkMutation();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<CreateShortenedLinkMutationVariables>({
  //   resolver: zodResolver(schema),
  // });

  // const submitImplementation: SubmitHandler<
  //   CreateShortenedLinkMutationVariables
  // > = async args => {
  //   try {
  //     const resp = await submit({ variables: args });
  //     success({ message: 'Link encurtado criado com sucesso!' });

  //     if (resp.data?.createShortenedLink.id) {
  //       router.push(
  //         routes.home.Datasets.show.path.replace(
  //           '[id]',
  //           resp.data.createShortenedLink.id,
  //         ),
  //       );
  //     } else {
  //       router.push(routes.home.Datasets.path);
  //     }
  //   } catch (e: any) {
  //     error({ message: e.message });
  //   }
  // };

  return (
    <form>
      <div className="space-y-12 w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 md:grid-cols-2 pb-10">
          <div>
            <SectionHeading
              title="Adicionar Pasta"
              renderDivider={false}
              description="Preencha as informações abaixo para adicionar uma nova pasta ao bucket. Você pode organizar os arquivos dentro das pastas para facilitar o gerenciamento e a estrutura dos datasets. Após a criação, será possível visualizar, gerenciar e organizar os arquivos diretamente na plataforma."
            />
          </div>

          <div className="grid max-w-2xl grid-rows-1 gap-x-6 gap-y-8 sm:grid-rows-1 md:col-span-1 mt-2">
            <div className="sm:row-span-2 space-y-7">
              <Input
                name="Nome"
                id="name"
                type="text"
                label="Nome da Pasta"
                isRequired
                autoComplete="off"
                // error={errors.name}
                // {...register('name')}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-2">
          <div>
            <SectionHeading
              title="Objetos"
              renderDivider={false}
              description="Inclua as imagens que deseja adicionar na pasta. Você pode carregar várias imagens de uma vez."
            />
          </div>

          <div>
            <FileInput
              label="Carregar imagens"
              description="Faça o upload de uma ou mais imagens para adicionar na pasta."
              uploadText="Clique para selecionar"
              dragAndDropText="ou solte aqui"
              supportedFormats="JPEG, PNG"
              maxSize="20MB"
            />
          </div>
        </div>
        <ImageGrid number={50} gridColl={7} />
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-3">
        <Button
          variant="outline"
          color="primary"
          type="button"
          className="rounded-md px-5"
          onClick={() => router.push(routes.dashboard.datasets.path)}
        >
          Cancelar
        </Button>
        <Button
          variant="solid"
          color="primary"
          // isLoading={loading}
          className="rounded-md px-12"
          onClick={() => {
            router.push(
              routes.dashboard.datasets.show.path.replace('[datasetId]', '1'),
            );
          }}
        >
          Adicionar
        </Button>
      </div>
    </form>
  );
}
