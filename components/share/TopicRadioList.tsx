import {useState} from 'react';

export default function TopicRadioList({topics}: {topics: string[]}) {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-wrap gap-2 text-xs" role="radiogroup">
      {topics.map((topic) => (
        <label
          key={topic}
          className={`cursor-pointer rounded-full border bg-gray-100 py-1 px-3 dark:bg-gray-800 ${
            value === topic ? 'border-king-500 bg-king-400 dark:bg-king-400 dark:text-gray-900' : ''
          }`}
        >
          <input
            aria-checked={value === topic}
            className="sr-only"
            type="radio"
            name="topic"
            value={topic}
            onChange={(e) => setValue(e.target.value)}
          />
          <span>{topic}</span>
        </label>
      ))}
    </div>
  );
}
