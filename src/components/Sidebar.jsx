import React, { useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { PiChalkboardTeacherFill } from "react-icons/pi";

export const sidebarData = [
  {
    section: 'Menu Items',
    items: [
      {
        label: 'HomePage',
        icon: IoHomeOutline,
        children: [
          { label: 'Dashboard' },
        ]
      },
      {
        label: 'Professor',
        icon: PiChalkboardTeacherFill,
        children: [
          { label: 'All Professor' },
          { label: 'Add All Professor' },
          { label: 'Edit Professor' }
        ]
      }
    ]
  },
  
];

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <aside className="w-60  bg-gray-100 p-4">
      {sidebarData.map((sectionData, sectionIndex) => (
        <div key={sectionIndex} className="mt-6">
          {/* Section Title from Data */}
          <p className="pl-4 mb-3 uppercase text-[10px] font-light text-gray-500">
            {sectionData.section}
          </p>

          {/* Section Items */}
          {sectionData.items.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenus[item.label];

            return (
              <div key={item.label} className="mb-1">
                <div
                  className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200 rounded transition"
                  onClick={() => toggleMenu(item.label)}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon size={18} />}
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.children && (
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MdKeyboardArrowRight size={16} />
                    </motion.div>
                  )}
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
                      className="overflow-hidden ml-8 mt-1 flex flex-col gap-1 text-[14px] mb-2 text-gray-700"
                    >
                      {item.children.map((sub, i) => (
                        <span
                          key={i}
                          className="cursor-pointer hover:text-blue-600 transition"
                        >
                          {sub.label}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Divider */}
          <div className="h-[1px] bg-slate-400 mt-4 opacity-30 mx-4" />
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
