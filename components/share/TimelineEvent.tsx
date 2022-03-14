import MedalIcon from '/public/images/medal.svg';

export interface EventItem {
  year: string;
  title: string;
  organization: string;
  tags?: {GPA?: number; medal?: string};
}

export default function TimelineEvents({eventList}: {eventList: EventItem[]}) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {eventList.map((e) => (
        <div className="flex flex-col justify-center sm:flex-row" key={e.year}>
          <div className="flex max-w-sm sm:w-1/2">
            <div className="w-full">
              <div className="text-xl font-medium">{e.title}</div>
              <div className="text-gray-600 dark:text-gray-300">{e.organization}</div>
              <div className="sm:hidden">{e.year}</div>

              {e.tags && (
                <div className="space-x-2 pt-1">
                  {e.tags.GPA && (
                    <span className="mb-2 inline-block rounded-md border border-gray-500 px-3 py-1 text-sm font-light">
                      GPA&nbsp;<strong className="font-bold">{e.tags.GPA}</strong>
                    </span>
                  )}

                  {e.tags.medal && (
                    <span className="mb-2 inline-block rounded-md border border-gray-500 px-3 py-1 text-sm font-light">
                      <MedalIcon className="inline w-4" />
                      <strong>{e.tags.medal}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="hidden max-w-sm indent-12 sm:-order-1 sm:block sm:w-1/2">{e.year}</div>
        </div>
      ))}
    </div>
  );
}
