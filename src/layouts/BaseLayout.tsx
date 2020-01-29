import React from 'react'
import Helmet from 'react-helmet'
import config from '../config'
import { Box } from 'rebass/styled-components'

import MobileHeader from "../components/Header/MobileHeader"
import Footer from '../components/Footer/Footer'

import appleTouchIcon from '../../static/assets/favicon/apple-touch-icon.png'

const BaseLayout = ({ children }) => (
  <div>
    <Helmet>
      <title>{ config.title }</title>
      <meta name="description" content={ config.description } />
      <meta name="keywords" content={ config.keywords } />
      <link rel="apple-touch-icon" sizes="180x180" href={ appleTouchIcon } />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {/*<MobileHeader />*/}

    {/*<Box as="section" pt="4.8rem" className="App">*/}
    <Box as="section" className="App">
      {children}
    </Box>

    <Footer />
  </div>
)

export default BaseLayout
