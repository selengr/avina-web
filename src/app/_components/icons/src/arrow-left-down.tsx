import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M18 6L6 18M6 18L6 9M6 18L15 18" />
    </BaseIcon>
  );
}
