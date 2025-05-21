import React from 'react'

import Sidebar from './components/Sidebar'
import NavbarLayout from './components/Navbar'
import ContentSection from './components/ContentSection'

const Dashboard = () => {
    return (
      <div className="flex flex-col h-screen">
        {/* Navbar at the top */}
        <NavbarLayout />
  
        {/* Sidebar and main content */}
        <div className="flex flex-1 mt-16">
          {/* Sidebar */}
          <Sidebar />
  
          {/* Main content */}
          <div className="flex-1 p-6">
            <ContentSection />
          </div>
        </div>
      </div>
    )
  }
  

export default Dashboard;
