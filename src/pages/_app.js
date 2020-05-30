/* eslint-disable react/prop-types */
import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import NextApp from 'next/app'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import Header from '../components/Header'
import { theme } from '../lib/theme'

function App({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header {...pageProps} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async ctx => {
  const props = await NextApp.getInitialProps(ctx)

  return { ...props }
}

export default App
