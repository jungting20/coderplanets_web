import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet'

/* eslint-disable */
export default class DocumentPage extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    try {
      const page = renderPage(App => props =>
        sheet.collectStyles(<App {...props} />)
      )
      const styleTags = sheet.getStyleElement()
      return { ...page, styleTags, helmet: Helmet.renderStatic() }
    } finally {
      console.log('## seal now ..')
      sheet.seal()
    }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  render() {
    /*
       const sheet = new ServerStyleSheet()
       const main = sheet.collectStyles(<Main />)
       const styleTags = sheet.getStyleElement()
     */
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetHeadComponents}
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <link rel="icon" href="/favicon.ico?v=7" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_TRACING_ID}');
              `,
            }}
          />
          {this.props.styleTags}
        </Head>
        {/* if the site is crashed the style here is ensure to work */}
        <body
          id="body"
          {...this.helmetBodyAttrComponents}
          style={{ margin: 0 }}
        >
          <Main />
          <NextScript />
        </body>

        {/* load OverlayScrollbars styles from CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/overlayscrollbars@1.12.0/css/OverlayScrollbars.css"
          rel="stylesheet"
        />
        {/* load iziToast from CDN */}
        <script
          async
          src="https://cdn.staticfile.org/izitoast/1.4.0/js/iziToast.min.js"
        />
        <link
          href="https://cdn.staticfile.org/izitoast/1.4.0/css/iziToast.css"
          rel="stylesheet"
        />
        <noscript>
          You need to enable JavaScript to get this website runing.
        </noscript>
      </html>
    )
  }
}
