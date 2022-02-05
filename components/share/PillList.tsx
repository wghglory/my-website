import {Dispatch, SetStateAction} from 'react';

export default function PillList({
  tags,
  setTerm,
  term,
}: {
  tags: string[];
  setTerm: Dispatch<SetStateAction<string>>;
  term: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`rounded-full border bg-gray-100 py-1 px-3 dark:bg-gray-800 ${
            term === tag ? 'border-king-500 bg-king-400 dark:bg-king-400 dark:text-gray-900' : ''
          }`}
          onClick={() => setTerm(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
