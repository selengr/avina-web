import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M5 20.8717L20 5.87175" />
      <path d="M20 20.8717L5 5.87175" />
    </BaseIcon>
  );
}
