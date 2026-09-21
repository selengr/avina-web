'use client';
import React, { useEffect, useState } from 'react';
import ProjectItems from '../projects-items/project-items';
import { IProjectsItemsProps } from '../projects-items/projects-items.types';
import StylizedButton from '@/app/_components/common/field/button/stylized-button';

const ProjectsList = ({
  filteredItems,
}: {
  filteredItems: IProjectsItemsProps[];
}) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getInitialCount = () =>
      window.innerWidth >= 1024 ? 9 : window.innerWidth >= 768 ? 6 : 5;

    setVisibleCount(getInitialCount());

    const handleResize = () => setVisibleCount(getInitialCount());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVisible = () => {
    setVisibleCount((prev) =>
      prev >= filteredItems.length ? 5 : filteredItems.length
    );
  };

  const isAllVisible = visibleCount >= filteredItems.length;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap w-full">
        {filteredItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/2 lg:w-1/3 p-2 mb-10"
          >
            <ProjectItems
              id={item.id}
              title={item.title}
              image={item.image}
              category={item.category}
              slug={item.slug}
              description={item.description}
            />
          </div>
        ))}
      </div>

      {isMounted && filteredItems.length > 5 && (
        <StylizedButton
          text={!isAllVisible ? 'نمایش بیشتر' : 'نمایش کمتر'}
          className="my-2 md:my-0 md:mt-4 py-2"
          onClick={handleVisible}
        />
      )}
    </div>
  );
};

export default ProjectsList;
