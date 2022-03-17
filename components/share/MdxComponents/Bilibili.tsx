export default function Bilibili({src}: {src: string}) {
  return (
    <div style={{position: 'relative', padding: '30% 45%', margin: '2rem 0'}}>
      <iframe
        style={{position: 'absolute', width: '100%', height: ' 100%', left: 0, top: 0}}
        src={`${src}&as_wide=1&high_quality=1&danmaku=0`}
        frameBorder="no"
        scrolling="no"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
