import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import MenuBook from '@material-ui/icons/MenuBook'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Toolbar from '@material-ui/core/Toolbar'

import { AvatarMenu } from '../components/AvatarMenu'
import { styleToolbar } from './sharedStyles'

const Header = ({ user }) => (
  <div>
    <Toolbar style={styleToolbar}>
      <Grid
        alignItems="center"
        container
        direction="row"
        justify="space-around"
      >
        <Grid item sm={10} xs={9} style={{ textAlign: 'left' }}>
          {user ? (
            <div>
              <Hidden smDown>
                <Link href="/settings">
                  <a style={{ marginRight: '20px' }}>Settings</a>
                </Link>
              </Hidden>
            </div>
          ) : (
            <Link href="/">
              <Avatar alt="Not my logo" style={{ margin: '0px auto 0px 20px' }}>
                <MenuBook />
              </Avatar>
            </Link>
          )}
        </Grid>
        <Grid item sm={1} xs={3} style={{ textAlign: 'right' }}>
          {user ? (
            <div style={{ whitespace: 'nowrap' }}>
              {user.avatarUrl && (
                <AvatarMenu
                  src={user.avatarUrl}
                  alt={user.displayName}
                  options={[
                    {
                      text: 'Got a question?',
                      href: '/questions'
                    },
                    {
                      text: 'Log out',
                      href: '/logout'
                    }
                  ]}
                />
              )}
            </div>
          ) : (
            <Link href="/login">
              <a style={{ margin: '0 20px 0 auto' }}>Login</a>
            </Link>
          )}
        </Grid>
      </Grid>
    </Toolbar>
  </div>
)

Header.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    displayName: PropTypes.string
  })
}

Header.defaultProps = {
  user: null
}

export default Header
