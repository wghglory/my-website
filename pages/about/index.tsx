import MedalIcon from '/public/medal.svg';
import SectionLayout from '@/components/share/SectionLayout';

export default function AboutPage() {
  const experienceList = [
    {
      year: '2017 - present',
      title: 'Staff Engineer',
      company: 'VMware Inc. Shanghai',
    },
    {
      year: '2016 - 2017',
      title: 'Team Lead',
      company: 'MUFG Union Bank. San Diego, CA',
    },
    {
      year: '2015 - 2016',
      title: 'Senior Full Stack Developer',
      company: 'SNH Inc. San Diego, CA',
    },
    {
      year: '2013 - 2015',
      title: 'Full Stack Developer',
      company: 'UPMC WorkPartners. Pittsburgh, PA',
    },
    {
      year: '2009 - 2012',
      title: '.Net Developer (Intern)',
      company: 'Chengguang Culture Inc. Dalian',
    },
  ];

  const educationList = [
    {
      year: '2012 - 2013',
      degree: 'Master in Civil Engineering',
      university: 'University of Miami',
      GPA: 3.8,
    },
    {
      year: '2008 - 2012',
      degree: 'BS in Environmental Engineering',
      university: 'Dalian University of Technology',
      GPA: 3.8,
      medal: '1st Prize Scholarship',
    },
  ];

  return (
    <>
      <SectionLayout id="about" title="Work Experience">
        <div className="space-y-6 sm:space-y-8">
          {experienceList.map((e) => (
            <div className="flex flex-col sm:flex-row" key={e.year}>
              <div className="flex sm:w-1/2 lg:w-2/3">
                <div className="space-y-2">
                  <div className="text-xl font-medium">{e.title}</div>
                  <div className="text-gray-600 dark:text-gray-300">{e.company}</div>
                  <div className="sm:hidden">{e.year}</div>
                </div>
              </div>
              <div className="hidden sm:-order-1 sm:block sm:w-1/2 lg:w-1/3">{e.year}</div>
            </div>
          ))}
        </div>
      </SectionLayout>
      <SectionLayout title="Education" className="">
        <div className="space-y-6 sm:space-y-8">
          {educationList.map((e) => (
            <div className="flex flex-col sm:flex-row" key={e.year}>
              <div className="flex sm:w-1/2 lg:w-2/3">
                <div className="space-y-2">
                  <div className="text-xl font-medium">{e.degree}</div>
                  <div className="text-gray-600 dark:text-gray-300">{e.university}</div>
                  <div className="sm:hidden">{e.year}</div>

                  <div>
                    <span className="inline-block rounded-md border border-gray-500 px-3 py-1 text-sm font-light">
                      GPA&nbsp;<strong className="font-bold">{e.GPA}</strong>
                    </span>
                  </div>

                  {e.medal && (
                    <div>
                      <span className="inline-block rounded-md border border-gray-500 px-3 py-1 text-sm font-light">
                        <MedalIcon className="inline w-4" />
                        <strong>{e.medal}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden sm:-order-1 sm:block sm:w-1/2 lg:w-1/3">{e.year}</div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
