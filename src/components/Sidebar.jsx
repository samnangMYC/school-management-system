import React, { useState, useEffect } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { PiChalkboardTeacherFill, PiStudentFill, PiDotDuotone } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Sidebar data with isDropdown boolean
export const sidebarData = [
  {
    section: 'Main Items',
    items: [
      {
        label: 'HomePage',
        icon: IoHomeOutline,
        path: '/dashboard',
        isDropdown: false,
      },
      {
        label: 'Professor',
        icon: PiChalkboardTeacherFill,
        isDropdown: true,
        children: [
          { label: 'All Professor', path: "/dashboard/professor" },
          { label: 'Add All Professor', path: "/dashboard/add-professor" },
          { label: 'Edit Professor', path: "/" }
        ]
      },
      {
        label: 'Students',
        icon: PiStudentFill,
        isDropdown: true,
        children: [
          { label: 'All Student', path: "/" },
          { label: 'Add All Student', path: "/" },
          { label: 'Edit Student', path: "/" }
        ]
      }
    ]
  }
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  // Auto-expand dropdowns based on active route
  useEffect(() => {
    const newOpenMenus = {};
    sidebarData.forEach(section => {
      section.items.forEach(item => {
        if (item.isDropdown) {
          const match = item.children?.some(child => pathname === child.path);
          if (match) newOpenMenus[item.label] = true;
        }
      });
    });
    setOpenMenus(prev => ({ ...prev, ...newOpenMenus }));
  }, [pathname]);

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <aside className="w-64 bg-gray-100 p-2 min-h-screen opacity-70">
      {sidebarData.map((sectionData, sectionIndex) => (
        <div key={sectionIndex} className="mt-6">
          <p className="pl-4 mb-3 uppercase text-[12px] font-light text-gray-500">
            {sectionData.section}
          </p>

          {sectionData.items.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenus[item.label];

            return (
              <div key={item.label} className="mb-1">
                {item.isDropdown ? (
                  <>
                    <div
                      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200 rounded transition"
                      onClick={() => toggleMenu(item.label)}
                    >
                      <div className={`flex items-center gap-2 ${item.children.some(child => pathname === child.path) ? "text-purple-600" : ""}`}>
                        {Icon && <Icon size={22} />}
                        <span className="text-lg font-medium">{item.label}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MdKeyboardArrowRight size={16} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && item.children && (
                        <motion.div
                          key="dropdown"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 }
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden ml-8 mt-1 flex flex-col gap-1 text-lg mb-2 text-gray-700"
                        >
                          {item.children.map((sub, i) => (
                            <Link key={i} to={sub.path}>
                              <div className={`cursor-pointer flex items-center gap-1 transition
                                ${pathname === sub.path ? "text-purple-600" : "hover:text-blue-600"}`}>
                                <PiDotDuotone />
                                {sub.label}
                              </div>
                            </Link>
                        
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.path}>
                    <div className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200 rounded transition ${pathname === item.path ? "text-purple-600" : ""}`}>
                      {Icon && <Icon size={18} />}
                      <span className="text-lg font-medium">{item.label}</span>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}

          <div className="h-[1px] bg-slate-400 mt-4 opacity-30 mx-4" />
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
