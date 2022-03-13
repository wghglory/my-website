import Responsibilities from '@/components/share/Responsibilities';
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

  const values = [
    {
      title: 'Kindness',
      description:
        "You can be the smartest and most skilled software engineer in the world, but if you're not kind to those with whom you interact, you'll never reach your full potential and you'll always be chasing the next thing to bring you happiness in life. Be kind.",
    },
    {
      title: 'Share',
      description:
        "One of the biggest things that has helped me learn is by committing myself to sharing what I know with others. I force myself into situations where I have to be accountable to those I'm sharing to really know my stuff. And as a result, I gained a lot, so do others.",
    },
    {
      title: 'Collaborate',
      description:
        "I've worked with many developers as a team member at companies I've worked at as well as in the open source community. I've found it to be invaluable to collaborate well with others. I value giving credit where it is due and celebrating the successes of others with them. We can accomplish much more together than separately.",
    },
  ];

  return (
    <main>
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
        <div className="grid gap-y-8 gap-x-16 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="space-y-4">
              <div className="text-2xl">{v.title}</div>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </main>
  );
}
