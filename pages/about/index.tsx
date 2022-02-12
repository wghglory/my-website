import SectionLayout from '@/components/share/SectionLayout';
import TimelineEvents from '@/components/share/TimelineEvent';

export default function AboutPage() {
  const experienceList = [
    {
      year: '2017 - present',
      title: 'Staff Engineer',
      organization: 'VMware Inc. Shanghai',
    },
    {
      year: '2016 - 2017',
      title: 'Team Lead',
      organization: 'MUFG Union Bank. San Diego, CA',
    },
    {
      year: '2015 - 2016',
      title: 'Senior Full Stack Developer',
      organization: 'SNH Inc. San Diego, CA',
    },
    {
      year: '2013 - 2015',
      title: 'Full Stack Developer',
      organization: 'UPMC WorkPartners. Pittsburgh, PA',
    },
    {
      year: '2009 - 2012',
      title: '.Net Developer (Intern)',
      organization: 'Chengguang Culture Inc. Dalian',
    },
  ];

  const educationList = [
    {
      year: '2012 - 2013',
      title: 'Master in Civil Engineering',
      organization: 'University of Miami',
      tags: {GPA: 3.8},
    },
    {
      year: '2008 - 2012',
      title: 'BS in Environmental Engineering',
      organization: 'Dalian University of Technology',
      tags: {GPA: 3.8, medal: '1st Prize Scholarship'},
    },
  ];

  return (
    <>
      <SectionLayout id="about" title="Work Experience">
        <TimelineEvents eventList={experienceList} />
      </SectionLayout>
      <SectionLayout title="Education" className="">
        <TimelineEvents eventList={educationList} />
      </SectionLayout>
    </>
  );
}
