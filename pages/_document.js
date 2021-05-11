import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from 'lib/gtag'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta name="description" content="Llevamos cultura, educación y la Palabra de Dios a todo el Perú y el mundo. Tenemos una variada programación para toda la familia: mensajes de edificación, música, información y cultura." />
          <link rel="image_src" type="image/jpeg" href="/images/imagen-default-bethel.jpg"></link>
          <meta property="og:title" content="Bethel Radio, nos une" />
          <meta property="og:url" content="https://bethelradio.fm/" />
          <meta property="og:description" content="Llevamos cultura, educación y la Palabra de Dios a todo el Perú y el mundo. Tenemos una variada programación para toda la familia: mensajes de edificación, música, información y cultura." />
          <meta property="og:site_name" content="Bethel radio" />
          <meta property="og:image" content="/images/imagen-default-bethel.jpg" />
          <meta name="robots" content="max-image-preview:large" />
          <meta name="keywords" content="bethel radio, bethel radio en vivo, bethel radio musica para el alma, bethel radio señal en vivo, bethel radio fm vivo, descargar musica de bethel radio, bethel radio peru, musica para el alma, bethel radio facebook, bethel radio peticiones, musica cristiana, radio cristiana, radio cristiana en vivo, radio cristiana peru, radio cristiana juvenil, radio cristiana online, escuchar radio cristiana en vivo por internet, radio cristiana en peru, radio cristiana lima fm, musica cristiana, musica cristiana de adoracion, musica cristiana para niños, musica cristiana instrumental, musica cristiana para jovenes, descargar musica cristiana, musica cristiana mmm, musica cristiana gratis, musica cristiana instrumental para adorar, musica cristiana bethel, musica cristiana peruana" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#212121" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap" rel="stylesheet" />
          <meta name="theme-color" content="#ffffff" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
