import {SvgSprite} from '@shared/SvgSprite';
import {useEffect, useState} from "react";
import classnames from "@utils/classnames.ts";
import {Link} from "react-router-dom";
import MediaQuery from "react-responsive";

export function Header() {

    const [scroll, setScroll] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    const handleScroll = () => {
        console.log(window.scrollY)
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scrollend", handleScroll);
    }, []);

    return (
        <>
            <header
                className='fixed top-0 z-10 h-max w-[100%] border-t-4 border-[#367639] w1024:border-none bg-[var(--color-neutral-0)] shadow-lg'
            >
                <MediaQuery query="(min-width: 1025px)">
                    <div>
                        <nav className={classnames("wrap bg-[#25282B] w-[100%]", scroll > 100 ? "hidden" : "visible")}>
                            <ul className='flex justify-end lg:gap-8'>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        О компании
                                    </a>
                                </li>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        Наши винотеки
                                    </a>
                                </li>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        Мероприятия
                                    </a>
                                </li>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        Акции
                                    </a>
                                </li>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        Блог
                                    </a>
                                </li>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        Вакансии
                                    </a>
                                </li>
                                <li className='p-1 fs-13 font-medium text-white'>
                                    <a href='#' className='flex items-center'>
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div
                            className={classnames("wrap border-b-[1px] border-[#25282B]", scroll > 100 ? "hidden" : "visible")}>
                            <div className='flex items-center justify-between py-4 w-[100%]'>
                                <SvgSprite type='logo'/>
                                <div className='ml-5 items-center gap-2 md:gap-3 lg:flex xl:gap-11 '>
                                    <div className='flex items-center'>
                                        <SvgSprite type='location' className='h-7 w-7'/>
                                        <span className=''>Петроградская наб, 8</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <SvgSprite type='location' className='h-7 w-7'/>
                                        <span className=''>Жуковского ул, 10</span>
                                    </div>
                                </div>
                                <span className='text-2xl font-normal block ml-auto'>8 (812) 555 55 55</span>
                                <div className='flex gap-2 md:gap-3 xl:gap-11 ml-10'>
                                    <SvgSprite type='search'/>
                                    <SvgSprite type='heart'/>
                                    <SvgSprite type='user'/>
                                    <SvgSprite type='cart'/>
                                </div>
                            </div>
                        </div>
                        <div className='wrap'>
                            <ul className='flex justify-between gap-1 lg:gap-8 w1260:gap-[0px] py-1'>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>ВИНО
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>ВИНО РОССИИ
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>ИГРИСТОЕ ВИНО
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>ВИСКИ
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>КОНЬЯК
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>ГРАППА
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>КРЕПКИЕ НАПИТКИ
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className='whitespace-nowrap p-1 fs-15 font-medium'>АКСЕССУАРЫ И ПОДАРКИ
                                </li>
                                <li onClick={() => setActive(!active)}
                                    className={classnames("whitespace-nowrap p-1 fs-15 font-medium cursor-pointer fw-600", active ? "text-primary" : "")}>ЕЩЁ
                                </li>
                            </ul>
                        </div>
                    </div>
                </MediaQuery>
                <div
                    className="w1024:visible w1024-min:hidden wrap bg-[#25282B] py-[10px] flex justify-between items-center">
                    <SvgSprite type='logo' color="white"/>
                    <button onClick={() => setActive(!active)}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#367639"/>
                            <path d="M11 20H29" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M11 26H29" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M11 14H29" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className={active ? "visible w1024:h-[100vh]" : "hidden"}>
                    <div
                        className="pt-[36px] border-t-[#C7C7C7] border-t-[1px] wrap grid grid-cols-6 w1024:grid-cols-1 w1024:pb-4 w1024:border-b-[1px] border-[var(--color-neutral-900)]">
                        <List></List>
                        <List></List>
                        <List></List>
                        <List></List>
                        <List></List>
                        <List></List>
                        <List></List>
                        <List></List>
                        <List></List>
                    </div>
                    <div className="w1024-min:hidden w1024:visible mt-[30px] wrap">
                        <span className="fs-20 fw-500 text-neutral-900 block">О проекте Wine&Dine</span>
                        <span className="fs-20 fw-500 text-neutral-900 mt-[15px] block">Контакты</span>
                        <span className="fs-30 fw-500 text-neutral-900 mt-[15px] block">8 (812) 555 55 55</span>
                        <ul className="flex items-center gap-4 mt-[40px] mb-[20px]">
                            <li>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path
                                        d="M21.7259 15.2716C22.7258 15.4392 23.6341 15.9115 24.3592 16.6351C25.0843 17.3587 25.5538 18.2652 25.7255 19.263M21.8786 12C23.657 12.3009 25.279 13.1426 26.5689 14.4261C27.8589 15.7134 28.6985 17.3321 29 19.1069M27.6108 26.1681C27.6108 26.1681 26.6452 27.1164 26.4086 27.3944C26.0232 27.8058 25.569 28 24.9737 28C24.9164 28 24.8553 28 24.7981 27.9962C23.6646 27.9238 22.6113 27.482 21.8213 27.105C19.6612 26.0614 17.7644 24.5799 16.1883 22.7022C14.8869 21.1369 14.0167 19.6896 13.4404 18.1357C13.0855 17.1873 12.9558 16.4485 13.013 15.7515C13.0512 15.3059 13.2229 14.9364 13.5397 14.6203L14.8411 13.3216C15.0281 13.1464 15.2265 13.0512 15.4212 13.0512C15.6616 13.0512 15.8562 13.1959 15.9784 13.3178C15.9822 13.3216 15.986 13.3254 15.9898 13.3292C16.2226 13.5463 16.444 13.771 16.6768 14.011C16.7951 14.1328 16.9172 14.2547 17.0393 14.3804L18.0812 15.4201C18.4857 15.8239 18.4857 16.1971 18.0812 16.6008C17.9705 16.7113 17.8637 16.8217 17.753 16.9284C17.4324 17.2559 17.6843 17.0046 17.3522 17.3016C17.3446 17.3093 17.337 17.3131 17.3331 17.3207C17.0049 17.6482 17.066 17.9682 17.1347 18.1852C17.1385 18.1967 17.1423 18.2081 17.1461 18.2195C17.4171 18.8746 17.7987 19.4916 18.3788 20.2267L18.3827 20.2305C19.436 21.5254 20.5466 22.5347 21.7716 23.3078C21.9281 23.4069 22.0884 23.4868 22.241 23.563C22.3784 23.6316 22.5082 23.6963 22.6189 23.7649C22.6341 23.7725 22.6494 23.7839 22.6647 23.7915C22.7944 23.8563 22.9166 23.8867 23.0425 23.8867C23.3593 23.8867 23.5577 23.6887 23.6226 23.6239L24.3707 22.8774C24.5004 22.7479 24.7065 22.5918 24.9469 22.5918C25.1836 22.5918 25.3782 22.7403 25.4965 22.8698C25.5003 22.8736 25.5003 22.8736 25.5041 22.8774L27.607 24.976C28.0001 25.3644 27.6108 26.1681 27.6108 26.1681Z"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </li>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path d="M22.0114 22.0114L26.668 26.668" stroke="white" strokeWidth="2"
                                          strokeLinecap="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.332 23.334C21.0935 23.334 23.332 21.0954 23.332 18.334C23.332 15.5726 21.0935 13.334 18.332 13.334C15.5706 13.334 13.332 15.5726 13.332 18.334C13.332 21.0954 15.5706 23.334 18.332 23.334Z"
                                          stroke="white" strokeWidth="2"/>
                                </svg>
                            </li>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path
                                        d="M26.63 15.4575C26.2469 15.0742 25.7921 14.7702 25.2915 14.5628C24.7909 14.3554 24.2544 14.2486 23.7125 14.2486C23.1706 14.2486 22.6341 14.3554 22.1335 14.5628C21.6329 14.7702 21.1781 15.0742 20.795 15.4575L20 16.2525L19.205 15.4575C18.4312 14.6837 17.3818 14.249 16.2875 14.249C15.1932 14.249 14.1438 14.6837 13.37 15.4575C12.5962 16.2313 12.1615 17.2807 12.1615 18.375C12.1615 19.4693 12.5962 20.5187 13.37 21.2925L14.165 22.0875L20 27.9225L25.835 22.0875L26.63 21.2925C27.0132 20.9094 27.3173 20.4546 27.5247 19.954C27.7321 19.4534 27.8389 18.9169 27.8389 18.375C27.8389 17.8331 27.7321 17.2966 27.5247 16.796C27.3173 16.2954 27.0132 15.8406 26.63 15.4575V15.4575Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </li>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path
                                        d="M26 26.457V24.957C26 24.1614 25.6839 23.3983 25.1213 22.8357C24.5587 22.2731 23.7956 21.957 23 21.957H17C16.2044 21.957 15.4413 22.2731 14.8787 22.8357C14.3161 23.3983 14 24.1614 14 24.957V26.457"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M20 18.957C21.6569 18.957 23 17.6139 23 15.957C23 14.3002 21.6569 12.957 20 12.957C18.3431 12.957 17 14.3002 17 15.957C17 17.6139 18.3431 18.957 20 18.957Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </li>
                            <li>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <g clipPath="url(#clip0_13_43)">
                                        <path
                                            d="M16.75 28.207C17.1642 28.207 17.5 27.8712 17.5 27.457C17.5 27.0428 17.1642 26.707 16.75 26.707C16.3358 26.707 16 27.0428 16 27.457C16 27.8712 16.3358 28.207 16.75 28.207Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M25 28.207C25.4142 28.207 25.75 27.8712 25.75 27.457C25.75 27.0428 25.4142 26.707 25 26.707C24.5858 26.707 24.25 27.0428 24.25 27.457C24.25 27.8712 24.5858 28.207 25 28.207Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M10.75 12.457H13.75L15.76 22.4995C15.8286 22.8448 16.0164 23.155 16.2907 23.3758C16.5649 23.5965 16.908 23.7138 17.26 23.707H24.55C24.902 23.7138 25.2451 23.5965 25.5193 23.3758C25.7936 23.155 25.9814 22.8448 26.05 22.4995L27.25 16.207H14.5"
                                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13_43">
                                            <rect width="18" height="18" fill="white" transform="translate(10 11.707)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[100%] border-t-[#C7C7C7] border-t-[1px] mt-[36px] w1024:hidden">
                        <ul className="flex justify-between items-center py-[18px] wrap">
                            <li className="fs-13 fw-600">Сухое</li>
                            <li className="fs-13 fw-600">Полусухое</li>
                            <li className="fs-13 fw-600">Полусладкое</li>
                            <li className="fs-13 fw-600">Сладкое</li>
                            <li className="fs-13 fw-600">До 1000 ₽</li>
                            <li className="fs-13 fw-600">От 1000 ₽ до 3000 ₽</li>
                            <li className="fs-13 fw-600">От 3000 ₽ до 5000 ₽</li>
                            <li className="fs-13 fw-600">От 5000 ₽</li>
                        </ul>
                    </div>
                </div>
                <MediaQuery query="(max-width: 1024px)">
                    <ul className="fixed bottom-0 wrap bg-[#25282B] py-[10px] flex items-center justify-center gap-4">
                        <li>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#367639"/>
                                <path
                                    d="M21.7259 15.2716C22.7258 15.4392 23.6341 15.9115 24.3592 16.6351C25.0843 17.3587 25.5538 18.2652 25.7255 19.263M21.8786 12C23.657 12.3009 25.279 13.1426 26.5689 14.4261C27.8589 15.7134 28.6985 17.3321 29 19.1069M27.6108 26.1681C27.6108 26.1681 26.6452 27.1164 26.4086 27.3944C26.0232 27.8058 25.569 28 24.9737 28C24.9164 28 24.8553 28 24.7981 27.9962C23.6646 27.9238 22.6113 27.482 21.8213 27.105C19.6612 26.0614 17.7644 24.5799 16.1883 22.7022C14.8869 21.1369 14.0167 19.6896 13.4404 18.1357C13.0855 17.1873 12.9558 16.4485 13.013 15.7515C13.0512 15.3059 13.2229 14.9364 13.5397 14.6203L14.8411 13.3216C15.0281 13.1464 15.2265 13.0512 15.4212 13.0512C15.6616 13.0512 15.8562 13.1959 15.9784 13.3178C15.9822 13.3216 15.986 13.3254 15.9898 13.3292C16.2226 13.5463 16.444 13.771 16.6768 14.011C16.7951 14.1328 16.9172 14.2547 17.0393 14.3804L18.0812 15.4201C18.4857 15.8239 18.4857 16.1971 18.0812 16.6008C17.9705 16.7113 17.8637 16.8217 17.753 16.9284C17.4324 17.2559 17.6843 17.0046 17.3522 17.3016C17.3446 17.3093 17.337 17.3131 17.3331 17.3207C17.0049 17.6482 17.066 17.9682 17.1347 18.1852C17.1385 18.1967 17.1423 18.2081 17.1461 18.2195C17.4171 18.8746 17.7987 19.4916 18.3788 20.2267L18.3827 20.2305C19.436 21.5254 20.5466 22.5347 21.7716 23.3078C21.9281 23.4069 22.0884 23.4868 22.241 23.563C22.3784 23.6316 22.5082 23.6963 22.6189 23.7649C22.6341 23.7725 22.6494 23.7839 22.6647 23.7915C22.7944 23.8563 22.9166 23.8867 23.0425 23.8867C23.3593 23.8867 23.5577 23.6887 23.6226 23.6239L24.3707 22.8774C24.5004 22.7479 24.7065 22.5918 24.9469 22.5918C25.1836 22.5918 25.3782 22.7403 25.4965 22.8698C25.5003 22.8736 25.5003 22.8736 25.5041 22.8774L27.607 24.976C28.0001 25.3644 27.6108 26.1681 27.6108 26.1681Z"
                                    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#367639"/>
                                <path d="M22.0114 22.0114L26.668 26.668" stroke="white" strokeWidth="2"
                                      strokeLinecap="round"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.332 23.334C21.0935 23.334 23.332 21.0954 23.332 18.334C23.332 15.5726 21.0935 13.334 18.332 13.334C15.5706 13.334 13.332 15.5726 13.332 18.334C13.332 21.0954 15.5706 23.334 18.332 23.334Z"
                                      stroke="white" strokeWidth="2"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#367639"/>
                                <path
                                    d="M26.63 15.4575C26.2469 15.0742 25.7921 14.7702 25.2915 14.5628C24.7909 14.3554 24.2544 14.2486 23.7125 14.2486C23.1706 14.2486 22.6341 14.3554 22.1335 14.5628C21.6329 14.7702 21.1781 15.0742 20.795 15.4575L20 16.2525L19.205 15.4575C18.4312 14.6837 17.3818 14.249 16.2875 14.249C15.1932 14.249 14.1438 14.6837 13.37 15.4575C12.5962 16.2313 12.1615 17.2807 12.1615 18.375C12.1615 19.4693 12.5962 20.5187 13.37 21.2925L14.165 22.0875L20 27.9225L25.835 22.0875L26.63 21.2925C27.0132 20.9094 27.3173 20.4546 27.5247 19.954C27.7321 19.4534 27.8389 18.9169 27.8389 18.375C27.8389 17.8331 27.7321 17.2966 27.5247 16.796C27.3173 16.2954 27.0132 15.8406 26.63 15.4575V15.4575Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#367639"/>
                                <path
                                    d="M26 26.457V24.957C26 24.1614 25.6839 23.3983 25.1213 22.8357C24.5587 22.2731 23.7956 21.957 23 21.957H17C16.2044 21.957 15.4413 22.2731 14.8787 22.8357C14.3161 23.3983 14 24.1614 14 24.957V26.457"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M20 18.957C21.6569 18.957 23 17.6139 23 15.957C23 14.3002 21.6569 12.957 20 12.957C18.3431 12.957 17 14.3002 17 15.957C17 17.6139 18.3431 18.957 20 18.957Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#367639"/>
                                <g clipPath="url(#clip0_13_43)">
                                    <path
                                        d="M16.75 28.207C17.1642 28.207 17.5 27.8712 17.5 27.457C17.5 27.0428 17.1642 26.707 16.75 26.707C16.3358 26.707 16 27.0428 16 27.457C16 27.8712 16.3358 28.207 16.75 28.207Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M25 28.207C25.4142 28.207 25.75 27.8712 25.75 27.457C25.75 27.0428 25.4142 26.707 25 26.707C24.5858 26.707 24.25 27.0428 24.25 27.457C24.25 27.8712 24.5858 28.207 25 28.207Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M10.75 12.457H13.75L15.76 22.4995C15.8286 22.8448 16.0164 23.155 16.2907 23.3758C16.5649 23.5965 16.908 23.7138 17.26 23.707H24.55C24.902 23.7138 25.2451 23.5965 25.5193 23.3758C25.7936 23.155 25.9814 22.8448 26.05 22.4995L27.25 16.207H14.5"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_13_43">
                                        <rect width="18" height="18" fill="white" transform="translate(10 11.707)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    </ul>
                </MediaQuery>
            </header>
        </>
    );
}

const List = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className="w1024:mt-[14px]">
            <Link to="/catalog" className="fs-15 fw-700 w1024:hidden">Красное</Link>
            <button onClick={() => setActive(!active)} className="fs-15 fw-700 w1024:text-[20px] w1024:font-medium w1024-min:hidden">Красное</button>
            <ul className={active ? "w1024:visible w1024:px-[20px]" : "mt-[18px] w1024:hidden"}>
                <li className="fs-13 fw-400 text-neutral-900 leading-7">
                    — Каберне Совиньон
                </li>
                <li className="fs-13 fw-400 text-neutral-900 leading-7">
                    — Мерло
                </li>
                <li className="fs-13 fw-400 text-neutral-900 leading-7">
                    — Пино Нуар
                </li>
                <li className="fs-13 fw-400 text-neutral-900 leading-7">
                    — Пино Нуар
                </li>
                <li className="fs-13 fw-400 text-neutral-900 leading-7">
                    — Пино Нуар
                </li>
                <li className="fs-13 fw-400 text-neutral-900 leading-7">
                    — Пино Нуар
                </li>
            </ul>
        </div>
    )
}