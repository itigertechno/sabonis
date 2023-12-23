import { SvgSprite } from '../../shared/SvgSprite';

export function Header() {
  return (
    <header className='sticky top-0 z-10 h-max w-full border-t-4 border-[#367639] bg-[var(--color-neutral-0)] shadow-lg'>
      <nav className='bg-[#25282B]'>
        <ul className='container flex justify-end lg:gap-8'>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              О компании
            </a>
          </li>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              Наши винотеки
            </a>
          </li>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              Мероприятия
            </a>
          </li>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              Акции
            </a>
          </li>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              Блог
            </a>
          </li>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              Вакансии
            </a>
          </li>
          <li className='p-1 text-[13px] font-medium text-white'>
            <a href='#' className='flex items-center'>
              Контакты
            </a>
          </li>
        </ul>
      </nav>

      <div className='border-b-[1px] border-[#25282B]'>
        <div className='container flex items-center justify-between py-4'>
          <SvgSprite type='logo' />
          <div className='hidden items-center gap-2 md:gap-3 lg:flex xl:gap-11 '>
            <div className='flex items-center'>
              <SvgSprite type='location' className='h-7 w-7' />
              <span className=''>Петроградская наб, 8</span>
            </div>
            <div className='flex items-center'>
              <SvgSprite type='location' className='h-7 w-7' />
              <span className=''>Жуковского ул, 10</span>
            </div>
          </div>
          <span className='hidden text-2xl font-normal sm:block'>8 (812) 555 55 55</span>
          <div className='flex gap-2 md:gap-3 xl:gap-11'>
            <SvgSprite type='search' />
            <SvgSprite type='heart' />
            <SvgSprite type='user' />
            <SvgSprite type='cart' />
          </div>
        </div>
      </div>

      <div className=''>
        <ul className='container flex justify-between gap-1 lg:gap-8'>
          <li className='p-1 text-[15px] font-medium'>ВИНО</li>
          <li className='p-1 text-[15px] font-medium'>ВИНО РОССИИ</li>
          <li className='p-1 text-[15px] font-medium'>ИГРИСТОЕ ВИНО</li>
          <li className='p-1 text-[15px] font-medium'>ВИСКИ</li>
          <li className='p-1 text-[15px] font-medium'>КОНЬЯК</li>
          <li className='p-1 text-[15px] font-medium'>ГРАППА</li>
          <li className='p-1 text-[15px] font-medium'>КРЕПКИЕ НАПИТКИ</li>
          <li className='p-1 text-[15px] font-medium'>АКСЕССУАРЫ И ПОДАРКИ</li>
          <li className='p-1 text-[15px] font-medium'>ЕЩЁ</li>
        </ul>
      </div>
    </header>
  );
}
