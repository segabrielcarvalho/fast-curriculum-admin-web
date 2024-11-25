'use client';
import Divider from '@/components/Divider';
import useDisclosure from '@/hooks/useDisclosure';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useProfessionalInfoContext } from '../../context/ProfessionalInfo.context';
import { CreateSkillButton } from './actions/CreateSkillButton';
import { DeleteSkill } from './actions/DeleteSkill';

export const Skills = () => {
  const {
    graphql: {
      professionalInfoQuery: { data },
    },
  } = useProfessionalInfoContext();

  const skills = data?.getProfessionalInfoByUserId.Skills || [];
  const disclosure = useDisclosure();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  if (skills.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-y-2 w-full flex-1">
        <p className="text-sm text-gray-500">
          Nenhuma habilidade adicionada ainda.
        </p>
        <CreateSkillButton />
        <Divider />
      </div>
    );
  }

  const handleOpenModal = (skillId: string) => {
    setSelectedSkill(skillId);
    disclosure.onOpen();
  };

  return (
    <div>
      <h2 className="text-base font-semibold text-gray-900">Habilidades</h2>
      <ul className="mt-6 flex flex-wrap gap-4">
        {skills.map((skill, index) => {
          const colors = [
            'bg-blue-100 text-blue-900',
            'bg-green-100 text-green-900',
            'bg-yellow-100 text-yellow-900',
            'bg-purple-100 text-purple-900',
            'bg-pink-100 text-pink-900',
          ];

          const colorClass = colors[index % colors.length];
          const colorText = colors[index % colors.length].split(' ')[1];

          return (
            <li
              key={skill.id}
              className={`relative group flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-800 ${colorClass}`}
            >
              <span className="flex-grow">{skill.name}</span>
              <XMarkIcon
                onClick={() => handleOpenModal(skill.id)}
                className={`hidden group-hover:inline-flex w-6 h-6 ml-2 ${colorText} rounded-full cursor-pointer opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 ease-in-out`}
              />
            </li>
          );
        })}
      </ul>

      {selectedSkill && (
        <DeleteSkill
          isOpen={disclosure.isOpen}
          onClose={disclosure.onClose}
          skillId={selectedSkill}
        />
      )}

      <div className="flex items-center gap-x-2 mt-4">
        <CreateSkillButton />
      </div>
    </div>
  );
};
