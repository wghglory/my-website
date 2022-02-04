import dynamic from 'next/dynamic';
import {useTheme} from 'next-themes';

const SkillPlane = dynamic(() => import('./SkillPlane'), {ssr: false});
const Sky = dynamic(() => import('./Sky'), {ssr: false});

export default function ExperienceSection() {
  const {theme} = useTheme();

  return (
    <section className="bg-white dark:bg-[#012038]" id="experience">
      <div className="container m-auto px-6 py-6 lg:py-12">
        <div className="flex flex-col justify-between sm:flex-row">
          <h2 className="flex items-center justify-center text-2xl sm:justify-start lg:py-6 lg:text-5xl">
            <strong className="py-6 text-4xl text-queen-500 lg:text-6xl">10</strong>&nbsp; Year Experience
          </h2>
          <div className="flex justify-center">
            <Sky theme={theme!} />
          </div>
        </div>
        <div className="text-center">
          <SkillPlane theme={theme!} />
        </div>
      </div>
    </section>
  );
}
