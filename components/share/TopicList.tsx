export default function TopicList({topics}: {topics: string[]}) {
  return (
    <div className="text-md flex flex-wrap gap-4 text-sm md:text-base">
      {topics.map((t) => (
        <span key={t} className={`rounded-full bg-gray-100 py-1 px-4 dark:bg-gray-700 md:py-2 md:px-6`}>
          {t}
        </span>
      ))}
    </div>
  );
}
