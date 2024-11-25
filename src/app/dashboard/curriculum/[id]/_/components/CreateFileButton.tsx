import Button from '@/components/Forms/Button';
import Modal from '@/components/Modal';
import useDisclosure from '@/hooks/useDisclosure';
import { FolderPlusIcon } from '@heroicons/react/24/outline';
import { FileInput } from '../../../../../../components/Forms/FileInput';
import Input from '../../../../../../components/Forms/Input';
import ImageGrid from '../../../../../../components/Grid/Images';

export const CreateFileButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        className="px-12"
        onClick={onOpen}
        variant="outline"
        color="secondary"
      >
        Adicionar Arquivo
      </Button>

      <Modal
        title="Adicionar Arquivo"
        isOpen={isOpen}
        buttonsLabel={{
          cancel: 'Cancelar',
          confirm: 'Adicionar',
        }}
        closeOnOverlayClick={false}
        image={<FolderPlusIcon className="w-5 h-5" />}
        onClose={onClose}
        imageColor="success"
        size="3xl"
        description="Faça o upload de uma ou mais imagens para adicionar ao dataset."
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-7 pb-8 md:grid-cols-1">
          <div className="mt-3">
            <Input
              name="Nome"
              id="name"
              type="text"
              label="Selecione a pasta"
              isRequired
              autoComplete="off"
            />
          </div>

          <FileInput
            label="Carregar imagem"
            uploadText="Clique para selecionar"
            dragAndDropText="ou solte aqui"
            supportedFormats="JPEG, PNG"
            maxSize="20MB"
          />

          <ImageGrid gridColl={5} number={10} />
        </div>
      </Modal>
    </>
  );
};
