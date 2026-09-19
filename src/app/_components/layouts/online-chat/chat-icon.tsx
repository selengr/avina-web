import Image from 'next/image';

const ChatIcon: React.FC = () => {
  return (
    <>
      <Image
        src={'/robot/bot.svg'}
        alt="chat"
        width={66}
        height={106}
        className="hidden lg:flex fixed right-12 bottom-10 z-[99999]"
      />
    </>
  );
};

export default ChatIcon;
