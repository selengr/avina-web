import Logo from './logo';
import MobileMenu from './mobile-menu';
import DesktopNav from './desk-top-nav';
import Search from '../../common/search/search';

export default function Header() {
  return (
    <header className="relative flex flex-row items-start w-full justify-between lg:justify-end pt-10 lg:pt-[30px] px-4">
      <Logo className="absolute right-0 hidden lg:flex lg:w-[130px] h-[50px] xl:w-auto xl:h-auto" />
      <MobileMenu />
      <div className="flex lg:hidden flex-col">
        <h1 className="text-primary text-m-h6 xs:text-m-h5 font-medium">
          راهكارهاي فناوری اطلاعات آوینا
        </h1>
        <h2 className="text-secondary text-m-h5 xs:text-m-h4 pb-2 -mt-1 font-light italic text-center font-museo-moderno">
          AVINA IT SOLUTIONS
        </h2>
      </div>
      <DesktopNav />
      <Search />
    </header>
  );
}
