import React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()

    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </>
      )
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#1976d2" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:300,400:latin"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          <style>
            {`
              a, a:focus {
                color: #1565c0;
                font-weight: 400;
                outline: none;
                text-decoration: none;
              }

              a:hover, button:hover {
                cursor: pointer;
                opacity: .75;
              }

              blockquote {
                border-left: .25em solid #dfe2e5;
                color: #555;
                padding: 0 1em;
              }

              pre {
                background: #fff;
                border: 1px solid #ddd;
                color: #000;
                display: block;
                overflow-x: auto;
                padding: .5em;
              }

              code {
                background: #fff;
                font-size: 14px;
                padding: 3px 5px;
              }
            `}
          </style>
        </Head>
        <body
          style={{
            backgroundColor: '#f7f9fc',
            color: '#222',
            font: '16px Muli',
            fontWeight: '300',
            lineHeight: '1.5em',
            margin: '0 auto'
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
