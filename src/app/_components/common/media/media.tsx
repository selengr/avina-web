'use client';

import { cn } from '@/lib/utils';
import {
  IconInstagram,
  IconLinkedin,
  IconTelegram,
  IconDiscord,
  IconYoutube,
  IconTwitter,
} from '../../icons/icons';

const socialLinks = [
  {
    icon: IconInstagram,
    url: 'https://instagram.com/avina',
    appUrl: 'instagram://user?username=avina',
    ariaLabel: 'اینستاگرام آوینا',
  },
  {
    icon: IconLinkedin,
    url: 'https://linkedin.com/company/avina',
    appUrl: 'linkedin://company/avina',
    ariaLabel: 'لینکدین آوینا',
  },
  {
    icon: IconTelegram,
    url: 'https://t.me/avina',
    appUrl: 'tg://resolve?domain=avina',
    ariaLabel: 'تلگرام آوینا',
  },
  {
    icon: IconDiscord,
    url: 'https://discord.gg/avina',
    appUrl: 'discord://invite/avina',
    ariaLabel: 'دیسکورد آوینا',
  },
  {
    icon: IconYoutube,
    url: 'https://youtube.com/@avina',
    appUrl: 'vnd.youtube://@avina',
    ariaLabel: 'یوتیوب آوینا',
  },
  {
    icon: IconTwitter,
    url: 'https://twitter.com/avina',
    appUrl: 'twitter://user?screen_name=avina',
    ariaLabel: 'توییتر آوینا',
  },
];

const Media = ({ className }: { className?: string }) => {
  const handleSocialClick = (webUrl: string, appUrl: string) => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = webUrl;
      }, 500);
    } else {
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={cn('flex gap-6 justify-end w-full', className)}>
      {[...socialLinks].reverse().map((social) => (
        <button
          key={social.ariaLabel}
          type="button"
          onClick={() => handleSocialClick(social.url, social.appUrl)}
          className="text-gray-600 hover:text-primary transition-colors"
          aria-label={social.ariaLabel}
        >
          <social.icon
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#212B36"
            stroke="none"
          />
        </button>
      ))}
    </div>
  );
};

export default Media;
