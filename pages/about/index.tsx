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

  return (
    <>
      <SectionLayout id="about" title="Work Experience">
        <div className="space-y-6 sm:space-y-8">
          {experienceList.map((e) => (
            <div className="flex flex-col sm:flex-row" key={e.year}>
              <div className="flex sm:w-1/2 lg:w-2/3">
                <div>
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
      <SectionLayout title="Education">
        <div>Education</div>
      </SectionLayout>
    </>
  );
}
