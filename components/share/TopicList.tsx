export default function TopicList({
  topics,
  currentTopicChange,
  currentTopic,
}: {
  topics: string[];
  currentTopicChange: (val: string) => void;
  currentTopic: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {topics.map((t) => (
        <button
          key={t}
          className={`rounded-full bg-gray-100 py-1 px-3 dark:bg-gray-700 ${
            currentTopic === t ? 'border-king-500 bg-king-400 dark:bg-king-400 dark:text-gray-900' : ''
          }`}
          onClick={() => currentTopicChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
