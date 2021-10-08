import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Proyecto Next.Js</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="images/favicon.ico" />
          {/* WebFonts */}
          {/* Archivos de estilo */}
          {/* Scripts */}
        </Head>
        <body className="la-clase-del-body-papa">
          <Main />
          <NextScript />
          {/* Elementos adicionales añadibles para toda la pagina */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
