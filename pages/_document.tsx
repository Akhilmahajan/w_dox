import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyleSheets } from '@mui/styles'
import { cache } from '@emotion/css'
import theme from '../themes/theme'
// import createEmotionCache from '../utilities/createEmotionCache'

export default class MyDocument extends Document {
  render() {
    //console.log((this.props as any).styles)
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200&family=Manrope:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200&family=Manrope:wght@300&family=Nunito+Sans:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200&family=Manrope:wght@300&family=Nunito+Sans:wght@300&display=swap"
            rel="stylesheet"
          ></link> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200&family=Manrope:wght@300&family=Nunito+Sans:wght@300&family=Sora&display=swap"
            rel="stylesheet"
          ></link>
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // https://github.com/mui/material-ui/blob/814fb60bbd8e500517b2307b6a297a638838ca89/examples/nextjs/pages/_document.js#L52-L59
  const sheets = new ServerStyleSheets()

  const originalRenderPage = ctx.renderPage
  // https://emotion.sh/docs/ssr
  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  // const cache = createEmotionCache()
  //const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return sheets.collect(<App emotionCache={cache} {...props} />)
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  /*const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))*/

  //const chunks = extractCriticalToChunks(initialProps.html)
  //const emotionStyleTags = constructStyleTagsFromChunks(chunks)
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(initialProps.html)

  return {
    ...initialProps,
    styles: (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion={`css ${ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      </React.Fragment>
    ),
    // styles: [
    //   ...React.Children.toArray(initialProps.styles),
    //   sheets.getStyleElement(),
    // ],
  }
}
