import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Head from 'next/head'

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index Page</title>
      <meta
        name="description"
        content="This is the description of the Index page"
      />
    </Head>
    <p>Content on Index page</p>
    <p>
      Email:
      {user.email}
    </p>
    <Button variant="contained">Button</Button>
  </div>
)

Index.getInitialProps = async ctx => ({ user: ctx.query.user })

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
}

Index.defaultProps = {
  user: null
}

export default Index
