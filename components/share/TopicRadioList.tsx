import {useState} from 'react';

export default function TopicRadioList({tags}: {tags: string[]}) {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-wrap gap-2 text-xs" role="radiogroup">
      {tags.map((tag) => (
        <label
          key={tag}
          className={`cursor-pointer rounded-full border bg-gray-100 py-1 px-3 dark:bg-gray-800 ${
            value === tag ? 'border-king-500 bg-king-400 dark:bg-king-400 dark:text-gray-900' : ''
          }`}
        >
          <input
            aria-checked={value === tag}
            className="sr-only"
            type="radio"
            name="topic"
            value={tag}
            onChange={(e) => setValue(e.target.value)}
          />
          <span>{tag}</span>
        </label>
      ))}
    </div>
  );
}
