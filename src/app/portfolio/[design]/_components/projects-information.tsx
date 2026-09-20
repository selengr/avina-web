import EdgeSection from '@/app/_components/common/card/edge-section';
import Divider from '@/app/_components/common/field/divider';
import PlatformLinks from './platform-links';

interface ProjectInfoItemProps {
  label: string;
  value: string;
}

function ProjectInfoItem({ label, value }: ProjectInfoItemProps) {
  return (
    <div className="flex flex-col">
      <span className="text-secondary text-m-subtitle2 md:font-kalameh md:text-d-subtitle1 font-semibold">
        {label}
      </span>
      <span className="text-secondary font-[400] text-m-body2 md:font-kalameh md:text-d-body1">
        {value}
      </span>
    </div>
  );
}

export default function ProjectInfo({
  rows,
}: {
  rows: Array<{ label: string; value: string }>;
}) {
  return (
    <EdgeSection
      className="mt-20"
      childClassName="m-0"
      sectionName="Information"
      title="توضیحات تکمیلی"
      isLtr={true}
    >
      <div className="space-y-4 pt-12 pr-10">
        {rows.map((item, index) => (
          <ProjectInfoItem
            key={`project-info-${index}`}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      <Divider className="my-6" />

      <PlatformLinks />
    </EdgeSection>
  );
}
