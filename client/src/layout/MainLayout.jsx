import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-1 mt-16">
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
//outlet :a special component from react-router-dom that works like a placeholder where the child route’s component will be shown.