export default function TopicRadioList({
  topics,
  currentTopicChange,
  currentTopic,
}: {
  topics: string[];
  currentTopicChange: (val: string) => void;
  currentTopic: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 text-xs" role="radiogroup">
      {topics.map((topic) => (
        <label
          key={topic}
          className={`cursor-pointer rounded-full bg-gray-100 py-1 px-3 dark:bg-gray-700 ${
            currentTopic === topic ? 'border-king-500 bg-king-400 dark:bg-king-400 dark:text-gray-900' : ''
          }`}
        >
          <input
            aria-checked={currentTopic === topic}
            className="sr-only"
            type="radio"
            name="topic"
            value={topic}
            onChange={(e) => currentTopicChange(e.target.value)}
          />
          <span>{topic}</span>
        </label>
      ))}
    </div>
  );
}
