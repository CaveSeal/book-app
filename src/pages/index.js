import React from 'react'

import Button from '@material-ui/core/Button'
import Head from 'next/head'

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index Page</title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <p>Content on Index page</p>
    <Button variant="contained">Button</Button>
  </div>
)

export default Index
