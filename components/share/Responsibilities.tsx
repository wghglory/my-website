import A11yIcon from '/public/responsibilities/a11y.svg';
import TechShareIcon from '/public/responsibilities/demo.svg';
import DesignIcon from '/public/responsibilities/design.svg';
import ProjectSetupIcon from '/public/responsibilities/file-system.svg';
import LanguageIcon from '/public/responsibilities/language.svg';
import LibraryIcon from '/public/responsibilities/library.svg';
import ManagementIcon from '/public/responsibilities/management.svg';
import PaperIcon from '/public/responsibilities/paper.svg';
import SystemIcon from '/public/responsibilities/system.svg';
import TestIcon from '/public/responsibilities/test.svg';

const responsibilities = [
  {
    name: 'System Design',
    icon: <SystemIcon className="w-6" aria-label="System Design" />,
  },
  {
    name: 'UI Design',
    icon: <DesignIcon className="w-6" aria-label="UI Design" />,
  },
  {
    name: 'Project Management',
    icon: <ManagementIcon className="w-6" aria-label="Project Management" />,
  },
  {
    name: 'Project Setup',
    icon: <ProjectSetupIcon className="w-6 text-cyan-600 dark:text-cyan-400" aria-label="Project Setup" />,
  },
  {
    name: 'Build Libraries',
    icon: <LibraryIcon className="w-6" aria-label="Build Libraries" />,
  },
  {
    name: 'Tech Share',
    icon: <TechShareIcon className="w-6" aria-label="Tech Share" />,
  },
  {
    name: 'Accessability',
    icon: <A11yIcon className="w-6 text-sky-600 dark:text-sky-400" aria-label="Accessability" />,
  },
  {
    name: 'Internationalization',
    icon: <LanguageIcon className="w-6" aria-label="Internationalization" />,
  },
  {
    name: 'Test Setup',
    icon: <TestIcon className="w-6" aria-label="Test Setup" />,
  },
  {
    name: 'Paper Work',
    icon: <PaperIcon className="w-6 text-gray-500 dark:text-gray-300" aria-label="Paper Work" />,
  },
];

export default function Responsibilities() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
      {responsibilities.map((r) => (
        <span key={r.name} className="inline-flex flex-col items-center justify-center gap-1 text-sm">
          {r.icon}
          <span>{r.name}</span>
        </span>
      ))}
    </div>
  );
}
