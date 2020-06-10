import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Link from 'next/link'
import Menu from '@material-ui/core/Menu'

export function AvatarMenu({ src, alt, options }) {
  const [open, setOpen] = React.useState(false)

  const anchorEl = React.useRef(null)

  const handleOpen = e => {
    setOpen(true)
    anchorEl.current = e.currentTarget
  }

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Avatar
        role="presentation"
        aria-owns="simple-menu"
        aria-haspopup="true"
        src={src}
        alt={alt}
        style={{
          cursor: 'pointer',
          margin: '0px 20px 0px auto'
        }}
        onClick={handleOpen}
        onKeyPress={handleOpen}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl.current}
        open={open}
        onClose={handleClose}
      >
        <p />
        {options.map(option => (
          <div id="wrapping-link" key={option.text}>
            <Link href={option.href} as={option.as || option.href}>
              <a style={{ padding: '0px 20px' }}>{option.text}</a>
            </Link>
          </div>
        ))}
        <p />
      </Menu>
    </div>
  )
}

AvatarMenu.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string
    })
  )
}
