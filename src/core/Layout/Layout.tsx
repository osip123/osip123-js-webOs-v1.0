import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Bar from '../../components/Bar/Bar'

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Bar />
    </>
  )
}

export default Layout
