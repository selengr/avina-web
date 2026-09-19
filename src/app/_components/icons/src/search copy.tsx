import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <rect
        width="24"
        height="24"
        rx="12"
      />
      <g clip-path="url(#a)">
        <circle
          cx="11.6667"
          cy="11.6666"
          r="6.3333"
        />
        <path d="M17.3333 17.3333L18.6667 18.6666" />
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
