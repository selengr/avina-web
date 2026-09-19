import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" />
      <path d="M2 6.75C2 6.34 2.34 6 2.75 6L10.25 6C10.66 6 11 6.34 11 6.75C11 7.16 10.66 7.5 10.25 7.5L2.75 7.5C2.34 7.5 2 7.16 2 6.75Z" />
      <path d="M13 17.75C13 17.34 13.34 17 13.75 17L21.25 17C21.66 17 22 17.34 22 17.75C22 18.16 21.66 18.5 21.25 18.5L13.75 18.5C13.34 18.5 13 18.16 13 17.75Z" />
    </BaseIcon>
  );
}
