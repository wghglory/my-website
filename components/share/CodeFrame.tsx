export default function CodeFrame({src, title = 'code demo'}: {src: string; title?: string}) {
  return (
    <div className="relative my-16 h-0 max-w-full overflow-hidden pb-[56.25%]">
      <iframe
        src={src}
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        allow="accelerometer; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking"
        title={title}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
