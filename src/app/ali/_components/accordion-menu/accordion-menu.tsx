'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IAccordionMenuProps } from './accordion-menu.types';
import AccordionMenuItem from './accordion-menu-item';

const AccordionMenu: React.FC<IAccordionMenuProps> = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    accordionData?.[0]?.id ?? null
  );

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {accordionData?.map((item) => {
        const isActive = activeIndex === item.id;
        return (
          <div
            key={item.id}
            className={`mb-5 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-white shadow-z8' : ''
            }`}
          >
            <AccordionMenuItem
              title={item.title}
              isOpen={isActive}
              onToggle={() => handleClick(item.id)}
              customClasses={{
                className: isActive ? 'border-none' : '',
                titleStyle: 'text-d-subtitle1 font-semibold',
                iconStyle: 'transition-transform duration-300',
              }}
            >
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionMenuItem>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionMenu;
