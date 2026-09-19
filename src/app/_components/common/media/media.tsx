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
    url: 'https://instagram.com/rezakarbakksh76',
    appUrl: 'instagram://user?username=rezakarbakksh76',
    ariaLabel: 'Instagram Profile',
  },
  {
    icon: IconLinkedin,
    url: 'https://linkedin.com/in/rezakarbakksh76',
    appUrl: 'linkedin://profile/rezakarbakksh76',
    ariaLabel: 'LinkedIn Profile',
  },
  {
    icon: IconTelegram,
    url: 'https://t.me/rezakarbakksh76',
    appUrl: 'tg://resolve?domain=rezakarbakksh76',
    ariaLabel: 'Telegram Profile',
  },
  {
    icon: IconDiscord,
    url: 'https://discord.com/users/rezakarbakksh76',
    appUrl: 'discord://users/rezakarbakksh76',
    ariaLabel: 'Discord Profile',
  },
  {
    icon: IconYoutube,
    url: 'https://youtube.com/@rezakarbakksh76',
    appUrl: 'vnd.youtube://user/rezakarbakksh76',
    ariaLabel: 'YouTube Channel',
  },
  {
    icon: IconTwitter,
    url: 'https://twitter.com/rezakarbakksh76',
    appUrl: 'twitter://user?screen_name=rezakarbakksh76',
    ariaLabel: 'Twitter Profile',
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
      window.open(webUrl, '_blank');
    }
  };

  return (
    <div className={cn('flex gap-6 justify-end w-full', className)}>
      {socialLinks.reverse().map((social, index) => (
        <button
          key={index}
          onClick={() => handleSocialClick(social.url, social.appUrl)}
          className="text-gray-600 hover:text-primary transition-colors"
          // aria-label={social.ariaLabel}
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
