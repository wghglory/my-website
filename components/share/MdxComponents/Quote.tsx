import cn from 'classnames';

export default function Quote({
  color = 'green',
  children,
}: {
  color: 'green' | 'sky' | 'orange' | 'red';
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        {
          'border-l-green-600 bg-green-200 dark:border-l-green-400 dark:bg-green-700': color === 'green',
          'border-l-sky-600 bg-sky-200 dark:border-l-sky-400 dark:bg-sky-700': color === 'sky',
          'border-l-orange-600 bg-orange-200 dark:border-l-orange-400 dark:bg-orange-700': color === 'orange',
          'border-l-red-600 bg-red-200 dark:border-l-red-400 dark:bg-red-700': color === 'red',
        },
        'my-6 rounded border-l-4  px-4 py-1',
      )}
    >
      {children}
    </div>
  );
}
