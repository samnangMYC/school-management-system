import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import NavbarLayout from '../components/Navbar'
import PageLoader from './loader/PageLoader'
import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const DashboardLayout = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 600) // simulate small delay

    return () => clearTimeout(timer)
  }, []) // re-run when route changes

  if (loading) {
    return <PageLoader />
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <NavbarLayout />

      {/* Sidebar and main content */}
      <div className="flex flex-1 mt-16">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 p-10 bg-gray-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      </div>
    </div>
  )
}

export default DashboardLayout
