import React from 'react'

import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Toolbar from '@material-ui/core/Toolbar'

import { styleToolbar } from './sharedStyles'

const Header = () => (
  <div>
    <Toolbar style={styleToolbar}>
      <Grid align="center" container direction="row" justify="space-around">
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Link href="/login">
            <a style={{ margin: '0 20px 0 auto' }}>Login</a>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </div>
)

export default Header
