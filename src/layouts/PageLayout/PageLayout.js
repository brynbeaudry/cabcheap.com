import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import CC_AppBar from './components/AppBar.js'

export const PageLayout = ({ children }) => (
    <div className="layout">
      <CC_AppBar title="CabCheap.com" showMenuIconButton={false}/>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
      {' · '}
      <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
