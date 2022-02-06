export default function TopicList({
  topics,
  syncInputWithQuery,
  term,
}: {
  topics: string[];
  syncInputWithQuery: (val: string) => void;
  term: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {topics.map((topic) => (
        <button
          key={topic}
          className={`rounded-full border bg-gray-100 py-1 px-3 dark:bg-gray-800 ${
            term === topic ? 'border-king-500 bg-king-400 dark:bg-king-400 dark:text-gray-900' : ''
          }`}
          onClick={() => syncInputWithQuery(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
