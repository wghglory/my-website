export default function ErrorFallback({error, resetErrorBoundary}: any) {
  return (
    <div role="alert" className="space-y-4 p-8">
      <pre className="text-red-500">{error.message}</pre>
      <button className="btn-error" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}
