import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M9.13477 19.0209L2.40715 10.5475L9.13477 2.07422" />
      <path d="M34.9609 10.5479H2.4077" />
    </BaseIcon>
  );
}
