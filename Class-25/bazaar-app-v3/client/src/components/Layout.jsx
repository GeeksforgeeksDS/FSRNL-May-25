import React, { Fragment } from 'react'
import Header from './Header'
import Box from '@mui/material/Box'

const Layout = (props) => {
  return (
      <Fragment>
          <header>
              <Header/>
          </header>
          <Box component="main" mt={10}>
              {props.children}
          </Box>
          <footer>
              
          </footer>
    </Fragment>
  )
}

export default Layout
