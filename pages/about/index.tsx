import Responsibilities from '@/components/share/Responsibilities';
import SectionLayout from '@/components/share/SectionLayout';
import TimelineEvents from '@/components/share/TimelineEvent';

export default function AboutPage() {
  const experienceList = [
    {
      year: '2017 - present',
      title: 'Staff Engineer',
      organization: 'VMware by Broadcom, Shanghai',
    },
    {
      year: '2016 - 2017',
      title: 'Team Lead',
      organization: 'MUFG Union Bank, San Diego, CA',
    },
    {
      year: '2015 - 2016',
      title: 'Senior Full Stack Developer',
      organization: 'SNH Inc, San Diego, CA',
    },
    {
      year: '2013 - 2015',
      title: 'Full Stack Developer',
      organization: 'UPMC WorkPartners, Pittsburgh, PA',
    },
    {
      year: '2009 - 2012',
      title: '.Net Developer (Intern)',
      organization: 'Chengguang Culture Inc, Dalian',
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

  const values = [
    {
      title: 'Kindness',
      description:
        'Being the smartest engineer means little without kindness. Treating others with respect and empathy is essential for reaching your full potential and finding genuine fulfillment in your work and life.',
    },
    {
      title: 'Share',
      description:
        'Sharing knowledge has been crucial to my growth. By teaching others, I hold myself accountable to truly understand what I know. This process benefits both me and those I share with, creating a cycle of continuous learning.',
    },
    {
      title: 'Collaborate',
      description:
        "Working with developers across companies and open source has shown me the power of collaboration. I believe in giving credit where it's due and celebrating shared successes. Together, we achieve far more than we could alone.",
    },
  ];

  return (
    <>
      <SectionLayout id="about" title="Experience" className="" lottie="travel">
        <TimelineEvents eventList={experienceList} />
      </SectionLayout>
      <SectionLayout title="Education" lottie="education">
        <TimelineEvents eventList={educationList} />
      </SectionLayout>
      <SectionLayout title="Responsibilities" className="">
        <Responsibilities />
      </SectionLayout>
      <SectionLayout title="My Values">
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="space-y-4">
              <div className="text-2xl">{v.title}</div>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
