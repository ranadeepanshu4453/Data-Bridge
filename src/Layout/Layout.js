import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Section from './Section'

const Layout = ({children}) => {
  return (
    <div className='flex flex-row fixed w-full'>
        <span className=''><Sidebar/></span>
       <span className='w-full h-full flex flex-col'>
       <span><Header /></span> 
        <Section>{children}</Section>
       </span> 
    </div>
  )
}

export default Layout