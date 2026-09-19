import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M22.5 67.5L67.5 22.5M67.5 22.5L67.5 56.25M67.5 22.5L33.75 22.5" />
    </BaseIcon>
  );
}
