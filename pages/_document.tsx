import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/Poppins/Poppins-Regular.ttf" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Poppins/Poppins-Medium.ttf" as="font" crossOrigin="anonymous" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Guanghui Wang Website" key="desc" />
        </Head>
        <body className="no-scrollbar">
          <Main />
          <NextScript />
          <div id="modal-portal"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
