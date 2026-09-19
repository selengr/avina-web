import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <g clipPath="url(#a)">
        <circle
          cx="7.6666"
          cy="8.5384"
          r="6.3333"
        />
        <path d="M13.3333 14.2051L14.6666 15.5384" />
      </g>
      <defs>
        <clipPath id="a">
          <rect
            width="16"
            height="16"
          />
        </clipPath>
      </defs>
    </BaseIcon>
  );
}
