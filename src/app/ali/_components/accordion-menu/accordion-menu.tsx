'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IAccordionMenuProps } from './accordion-menu.types';
import AccordionMenuItem from './accordion-menu-item';

const AccordionMenu: React.FC<IAccordionMenuProps> = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {accordionData?.map((item) => {
        const isActive = activeIndex === item.id;
        return (
          <motion.div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`cursor-pointer mb-5 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-white shadow-z8' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <AccordionMenuItem
                title={item.title}
                customClasses={{
                  className: isActive ? 'border-none' : '',
                  titleStyle: 'text-d-subtitle1 font-semibold',
                  iconStyle: `transition-transform duration-300 ${
                    isActive ? 'rotate-180' : ''
                  }`,
                }}
              >
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {item.content}
                </motion.div>
              </AccordionMenuItem>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AccordionMenu;
