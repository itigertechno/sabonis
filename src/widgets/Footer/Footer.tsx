import MediaQuery from "react-responsive";
import {useState} from "react";
import {Link} from "react-router-dom";
import DropList from "@shared/DropList/DropList.tsx";

export function Footer() {
    const [agreeNewsletter, setAgreeNewsletter] = useState<boolean>(false);

    return (
        <footer className='bg-[#25282B] text-white w1024-min:wrap py-[40px] pb-[60px]'>
            <MediaQuery query="(min-width: 1025px)">
                <div className="grid grid-cols-3 gap-[40px] w1024:grid-cols-1 w1024:wrap">
                    <div
                        className="w1024-min:border-t-[1px] w1024:border-b-[1px] w1024:pt-[0] w1024:pb-[15px] w1024:border-[#494949] w1024-min:border-[var(--color-neutral-0)] pt-[24px]">
                        <h5 className="fs-20 fw-600 text-neutral-0">Каталог товаров</h5>
                        <div className="">
                            <div className="grid grid-cols-2 mt-[40px] w1024:mt-[15px] pb-[1.125rem]">
                                <ul>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Вино</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Вино России</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Игристое вино</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Коньяк</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Виски</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Граппа</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Крепкие напитки</li>
                                </ul>
                                <ul>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Аксессуары</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Подарки</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Гастрономия</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Миниатюры</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Пиво</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Сидр и пуаре</li>
                                    <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Оборудование</li>
                                </ul>
                            </div>
                            <div className="mt-[40px] w1024:hidden">
                                <h1 className="fs-20 text-neutral-0 fw-600">Рассылка с акциями и скидками</h1>
                                <label
                                    className="flex gap-[30px] bg-[var(--color-neutral-900)] mt-[15px] items-center lg:w-[60%] pl-[20px] pr-[10px] justify-between">
                                    <input
                                        type="text"
                                        className="fs-15 fw-400 text-neutral-0 leading-[40px] bg-transparent outline-0 w-[100%]"
                                        placeholder="Ваш E-mail или телефон"
                                    />
                                    <button>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M16.8342 9.10538C17.575 9.47286 17.575 10.5296 16.8342 10.8971L3.94437 17.2908C3.27966 17.6205 2.5 17.137 2.5 16.395V11.6666L10 9.99998L2.5 8.16196L2.5 3.60748C2.5 2.86549 3.27966 2.38192 3.94437 2.71164L16.8342 9.10538Z"
                                                  stroke="white" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </label>
                                <div className="flex gap-[14px] items-center mt-[10px]">
                                    <button onClick={() => setAgreeNewsletter(!agreeNewsletter)}>
                                        {
                                            agreeNewsletter ?
                                                <>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="21.5" y="2.5" width="19" height="19" rx="1.5"
                                                              transform="rotate(90 21.5 2.5)" fill="#367639"
                                                              stroke="#CECECE"
                                                              strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M6.66699 12.6667L10.0003 16L17.3337 8.66669" stroke="white"
                                                              strokeLinecap="round"/>
                                                    </svg>
                                                </> :
                                                <>
                                                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="21" y="3.64685" width="19.3474" height="18" rx="1"
                                                              transform="rotate(90 21 3.64685)" stroke="#494949"
                                                              strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </>
                                        }
                                    </button>
                                    <span className="fs-15 fw-400 text-neutral-0">Согласие на получение рассылки</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="w1024-min:border-t-[1px] w1024:border-b-[1px] w1024:pt-[0] w1024:pb-[15px] w1024:border-[#494949] w1024-min:border-[var(--color-neutral-0)] pt-[24px]">
                        <h5 className="fs-20 fw-600 text-neutral-0">Магазины Сабонис</h5>
                        <p className="fs-15 fw-500 text-neutral-0  mt-[40px] w1024:mt-[15px] pb-[1.125rem]">
                            Санкт-Петербург, Петроградская наб. 8
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[20px]">
                            Тел.: +7 (812) 409-96-98
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                            Время работы: ежедневно,
                            с 11:00 до 22:00
                        </p>
                        <p className="fs-15 fw-500 text-neutral-0 mt-[40px]">
                            Санкт-Петербург, ул. Жуковского 10
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[20px]">
                            Тел.: +7 (812) 602-74-41
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                            Время работы: ежедневно,
                            с 11:00 до 22:00
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[40px]">
                            Email: info@sabonis.ru
                        </p>
                    </div>
                    <div
                        className="w1024-min:border-t-[1px] w1024:border-b-[1px] w1024:pt-[0] w1024:pb-[15px] w1024:border-[#494949] w1024-min:border-[var(--color-neutral-0)] pt-[24px]">
                        <h5 className="fs-20 fw-600 text-neutral-0">Проект Wine&Dine</h5>
                        <p className="fs-15 fw-500 text-neutral-0 mt-[40px]  w1024:mt-[15px]">
                            Санкт-Петербург, Петроградская наб. 8
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[30px]">
                            Тел.: +7 (812) 409-96-98, +7 (931) 105-47-18
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                            Email: bilety@wineanddine.group
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                            Сайт: https://wineanddine.group
                        </p>
                        <a href="#" className="fs-15 fw-400 underline text-neutral-0 mt-[30px]">
                            Афиша мероприятий и дегустаций
                        </a>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[30px]">
                            Время работы:
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                            <b className="text-neutral-0">пн - ср</b> 11.00 - 23.00
                        </p>

                        <p className="fs-15 fw-400 text-neutral-0">
                            <b className="text-neutral-0">чт</b> 11.00 - 00.00
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0">
                            <b className="text-neutral-0">пт - сб</b> 11.00 - 01.00
                        </p>
                        <p className="fs-15 fw-400 text-neutral-0">
                            <b className="text-neutral-0">вс</b> 11.00 - 23.00
                        </p>
                    </div>
                </div>
            </MediaQuery>
            <div
                className="pt-[20px] border-t-[1px] border-[var(--color-neutral-0)] mt-[20px] grid grid-cols-3 items-center w-[100%] w1024:hidden">
                <div className="flex gap-[20px]">
                    <a href="#">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#367639"/>
                            <path
                                d="M35.5406 20.42C35.4218 19.9454 35.1799 19.5106 34.8392 19.1594C34.4986 18.8082 34.0713 18.5532 33.6006 18.42C31.8806 18 25.0006 18 25.0006 18C25.0006 18 18.1206 18 16.4006 18.46C15.9298 18.5932 15.5025 18.8482 15.1619 19.1994C14.8213 19.5506 14.5794 19.9854 14.4606 20.46C14.1458 22.2056 13.9918 23.9763 14.0006 25.75C13.9894 27.537 14.1433 29.3213 14.4606 31.08C14.5915 31.5398 14.8389 31.9581 15.1787 32.2945C15.5186 32.6308 15.9394 32.8738 16.4006 33C18.1206 33.46 25.0006 33.46 25.0006 33.46C25.0006 33.46 31.8806 33.46 33.6006 33C34.0713 32.8668 34.4986 32.6118 34.8392 32.2606C35.1799 31.9094 35.4218 31.4746 35.5406 31C35.8529 29.2676 36.0069 27.5103 36.0006 25.75C36.0118 23.963 35.8578 22.1787 35.5406 20.42V20.42Z"
                                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22.75 29.0205L28.5 25.7505L22.75 22.4805V29.0205Z" stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#367639"/>
                            <mask id="path-2-inside-1_106_1243" fill="white">
                                <path
                                    d="M36.2192 31.0278C36.191 30.9669 36.1646 30.9164 36.1401 30.8759C35.7351 30.1465 34.9612 29.2512 33.8188 28.1897L33.7946 28.1654L33.7825 28.1535L33.7703 28.1413H33.7581C33.2396 27.647 32.9112 27.3147 32.7737 27.1445C32.5222 26.8204 32.4658 26.4923 32.6033 26.1599C32.7004 25.9087 33.0653 25.3783 33.6971 24.5679C34.0295 24.1385 34.2927 23.7943 34.487 23.5349C35.8889 21.6713 36.4966 20.4804 36.3102 19.9617L36.2378 19.8405C36.1891 19.7676 36.0635 19.7008 35.8612 19.64C35.6584 19.5792 35.3992 19.5692 35.0831 19.6097L31.583 19.6338C31.5263 19.6137 31.4453 19.6156 31.3398 19.64C31.2344 19.6643 31.1817 19.6765 31.1817 19.6765L31.1208 19.707L31.0725 19.7435C31.0319 19.7677 30.9874 19.8102 30.9387 19.871C30.8903 19.9316 30.8498 20.0027 30.8175 20.0837C30.4364 21.0641 30.0031 21.9756 29.5169 22.8182C29.2171 23.3207 28.9417 23.7561 28.6903 24.1248C28.4392 24.4934 28.2285 24.7649 28.0585 24.939C27.8882 25.1132 27.7345 25.2528 27.5965 25.3582C27.4587 25.4637 27.3535 25.5083 27.2807 25.492C27.2077 25.4757 27.1389 25.4595 27.0739 25.4433C26.9605 25.3704 26.8693 25.2711 26.8006 25.1456C26.7315 25.02 26.685 24.8619 26.6607 24.6715C26.6365 24.481 26.6222 24.3171 26.6182 24.1793C26.6144 24.0417 26.6161 23.847 26.6243 23.5958C26.6328 23.3446 26.6365 23.1745 26.6365 23.0854C26.6365 22.7775 26.6425 22.4432 26.6546 22.0827C26.6669 21.7221 26.6768 21.4365 26.6851 21.226C26.6933 21.0153 26.6972 20.7924 26.6972 20.5575C26.6972 20.3225 26.6829 20.1382 26.6546 20.0044C26.6267 19.8709 26.5838 19.7412 26.5273 19.6155C26.4705 19.4899 26.3873 19.3928 26.2782 19.3238C26.1688 19.2549 26.0328 19.2003 25.871 19.1597C25.4416 19.0625 24.8947 19.0099 24.2301 19.0017C22.7231 18.9856 21.7548 19.0829 21.3254 19.2935C21.1553 19.3825 21.0013 19.5042 20.8636 19.658C20.7177 19.8363 20.6974 19.9336 20.8027 19.9497C21.2889 20.0225 21.6331 20.1967 21.8357 20.4722L21.9087 20.6182C21.9655 20.7235 22.0222 20.9099 22.079 21.1773C22.1356 21.4446 22.1722 21.7403 22.1883 22.0643C22.2287 22.6558 22.2287 23.1622 22.1883 23.5835C22.1477 24.0049 22.1094 24.333 22.0728 24.568C22.0363 24.803 21.9816 24.9934 21.9087 25.1392C21.8357 25.285 21.7871 25.3742 21.7628 25.4065C21.7385 25.4389 21.7182 25.4593 21.7021 25.4673C21.5968 25.5076 21.4873 25.5282 21.3739 25.5282C21.2604 25.5282 21.1227 25.4714 20.9607 25.3579C20.7987 25.2444 20.6306 25.0885 20.4564 24.89C20.2822 24.6914 20.0857 24.4139 19.8668 24.0574C19.6481 23.7009 19.4213 23.2796 19.1863 22.7935L18.9919 22.441C18.8703 22.2141 18.7043 21.8839 18.4936 21.4505C18.2828 21.0169 18.0965 20.5975 17.9345 20.1924C17.8698 20.0223 17.7725 19.8927 17.6429 19.8036L17.5821 19.767C17.5416 19.7347 17.4767 19.7003 17.3877 19.6637C17.2985 19.6272 17.2054 19.6009 17.1081 19.5848L13.778 19.609C13.4377 19.609 13.2068 19.6861 13.0852 19.84L13.0366 19.9129C13.0123 19.9534 13 20.0182 13 20.1074C13 20.1966 13.0243 20.306 13.073 20.4355C13.5591 21.578 14.0878 22.6799 14.659 23.7413C15.2301 24.8028 15.7265 25.6578 16.1477 26.3056C16.569 26.9538 16.9984 27.5657 17.436 28.1408C17.8736 28.7161 18.1632 29.0848 18.3049 29.2468C18.4468 29.409 18.5583 29.5304 18.6393 29.6114L18.9432 29.903C19.1376 30.0975 19.4232 30.3304 19.7999 30.6018C20.1768 30.8734 20.594 31.1407 21.0518 31.4042C21.5097 31.6674 22.0423 31.8821 22.6501 32.0481C23.2578 32.2144 23.8492 32.2811 24.4245 32.2489H25.8222C26.1057 32.2244 26.3205 32.1353 26.4664 31.9814L26.5148 31.9205C26.5473 31.8722 26.5778 31.797 26.6059 31.6959C26.6343 31.5947 26.6484 31.4831 26.6484 31.3617C26.6401 31.0134 26.6666 30.6994 26.7273 30.4199C26.7878 30.1405 26.8569 29.9298 26.9341 29.7879C27.0113 29.6462 27.0984 29.5266 27.1953 29.4296C27.2924 29.3324 27.3617 29.2735 27.4023 29.2533C27.4426 29.2329 27.4749 29.2191 27.4992 29.2108C27.6936 29.146 27.9225 29.2087 28.1861 29.3993C28.4494 29.5897 28.6965 29.8248 28.9275 30.1042C29.1585 30.3839 29.4359 30.6977 29.7599 31.046C30.0842 31.3945 30.3677 31.6535 30.6107 31.8239L30.8537 31.9698C31.0159 32.0671 31.2266 32.1562 31.4859 32.2372C31.7448 32.3182 31.9716 32.3385 32.1664 32.298L35.2776 32.2494C35.5853 32.2494 35.8248 32.1985 35.9946 32.0974C36.1648 31.9961 36.2659 31.8846 36.2985 31.7632C36.331 31.6417 36.3328 31.5039 36.3047 31.3498C36.2759 31.196 36.2475 31.0886 36.2192 31.0278Z"/>
                            </mask>
                            <path
                                d="M36.2192 31.0278C36.191 30.9669 36.1646 30.9164 36.1401 30.8759C35.7351 30.1465 34.9612 29.2512 33.8188 28.1897L33.7946 28.1654L33.7825 28.1535L33.7703 28.1413H33.7581C33.2396 27.647 32.9112 27.3147 32.7737 27.1445C32.5222 26.8204 32.4658 26.4923 32.6033 26.1599C32.7004 25.9087 33.0653 25.3783 33.6971 24.5679C34.0295 24.1385 34.2927 23.7943 34.487 23.5349C35.8889 21.6713 36.4966 20.4804 36.3102 19.9617L36.2378 19.8405C36.1891 19.7676 36.0635 19.7008 35.8612 19.64C35.6584 19.5792 35.3992 19.5692 35.0831 19.6097L31.583 19.6338C31.5263 19.6137 31.4453 19.6156 31.3398 19.64C31.2344 19.6643 31.1817 19.6765 31.1817 19.6765L31.1208 19.707L31.0725 19.7435C31.0319 19.7677 30.9874 19.8102 30.9387 19.871C30.8903 19.9316 30.8498 20.0027 30.8175 20.0837C30.4364 21.0641 30.0031 21.9756 29.5169 22.8182C29.2171 23.3207 28.9417 23.7561 28.6903 24.1248C28.4392 24.4934 28.2285 24.7649 28.0585 24.939C27.8882 25.1132 27.7345 25.2528 27.5965 25.3582C27.4587 25.4637 27.3535 25.5083 27.2807 25.492C27.2077 25.4757 27.1389 25.4595 27.0739 25.4433C26.9605 25.3704 26.8693 25.2711 26.8006 25.1456C26.7315 25.02 26.685 24.8619 26.6607 24.6715C26.6365 24.481 26.6222 24.3171 26.6182 24.1793C26.6144 24.0417 26.6161 23.847 26.6243 23.5958C26.6328 23.3446 26.6365 23.1745 26.6365 23.0854C26.6365 22.7775 26.6425 22.4432 26.6546 22.0827C26.6669 21.7221 26.6768 21.4365 26.6851 21.226C26.6933 21.0153 26.6972 20.7924 26.6972 20.5575C26.6972 20.3225 26.6829 20.1382 26.6546 20.0044C26.6267 19.8709 26.5838 19.7412 26.5273 19.6155C26.4705 19.4899 26.3873 19.3928 26.2782 19.3238C26.1688 19.2549 26.0328 19.2003 25.871 19.1597C25.4416 19.0625 24.8947 19.0099 24.2301 19.0017C22.7231 18.9856 21.7548 19.0829 21.3254 19.2935C21.1553 19.3825 21.0013 19.5042 20.8636 19.658C20.7177 19.8363 20.6974 19.9336 20.8027 19.9497C21.2889 20.0225 21.6331 20.1967 21.8357 20.4722L21.9087 20.6182C21.9655 20.7235 22.0222 20.9099 22.079 21.1773C22.1356 21.4446 22.1722 21.7403 22.1883 22.0643C22.2287 22.6558 22.2287 23.1622 22.1883 23.5835C22.1477 24.0049 22.1094 24.333 22.0728 24.568C22.0363 24.803 21.9816 24.9934 21.9087 25.1392C21.8357 25.285 21.7871 25.3742 21.7628 25.4065C21.7385 25.4389 21.7182 25.4593 21.7021 25.4673C21.5968 25.5076 21.4873 25.5282 21.3739 25.5282C21.2604 25.5282 21.1227 25.4714 20.9607 25.3579C20.7987 25.2444 20.6306 25.0885 20.4564 24.89C20.2822 24.6914 20.0857 24.4139 19.8668 24.0574C19.6481 23.7009 19.4213 23.2796 19.1863 22.7935L18.9919 22.441C18.8703 22.2141 18.7043 21.8839 18.4936 21.4505C18.2828 21.0169 18.0965 20.5975 17.9345 20.1924C17.8698 20.0223 17.7725 19.8927 17.6429 19.8036L17.5821 19.767C17.5416 19.7347 17.4767 19.7003 17.3877 19.6637C17.2985 19.6272 17.2054 19.6009 17.1081 19.5848L13.778 19.609C13.4377 19.609 13.2068 19.6861 13.0852 19.84L13.0366 19.9129C13.0123 19.9534 13 20.0182 13 20.1074C13 20.1966 13.0243 20.306 13.073 20.4355C13.5591 21.578 14.0878 22.6799 14.659 23.7413C15.2301 24.8028 15.7265 25.6578 16.1477 26.3056C16.569 26.9538 16.9984 27.5657 17.436 28.1408C17.8736 28.7161 18.1632 29.0848 18.3049 29.2468C18.4468 29.409 18.5583 29.5304 18.6393 29.6114L18.9432 29.903C19.1376 30.0975 19.4232 30.3304 19.7999 30.6018C20.1768 30.8734 20.594 31.1407 21.0518 31.4042C21.5097 31.6674 22.0423 31.8821 22.6501 32.0481C23.2578 32.2144 23.8492 32.2811 24.4245 32.2489H25.8222C26.1057 32.2244 26.3205 32.1353 26.4664 31.9814L26.5148 31.9205C26.5473 31.8722 26.5778 31.797 26.6059 31.6959C26.6343 31.5947 26.6484 31.4831 26.6484 31.3617C26.6401 31.0134 26.6666 30.6994 26.7273 30.4199C26.7878 30.1405 26.8569 29.9298 26.9341 29.7879C27.0113 29.6462 27.0984 29.5266 27.1953 29.4296C27.2924 29.3324 27.3617 29.2735 27.4023 29.2533C27.4426 29.2329 27.4749 29.2191 27.4992 29.2108C27.6936 29.146 27.9225 29.2087 28.1861 29.3993C28.4494 29.5897 28.6965 29.8248 28.9275 30.1042C29.1585 30.3839 29.4359 30.6977 29.7599 31.046C30.0842 31.3945 30.3677 31.6535 30.6107 31.8239L30.8537 31.9698C31.0159 32.0671 31.2266 32.1562 31.4859 32.2372C31.7448 32.3182 31.9716 32.3385 32.1664 32.298L35.2776 32.2494C35.5853 32.2494 35.8248 32.1985 35.9946 32.0974C36.1648 31.9961 36.2659 31.8846 36.2985 31.7632C36.331 31.6417 36.3328 31.5039 36.3047 31.3498C36.2759 31.196 36.2475 31.0886 36.2192 31.0278Z"
                                stroke="white" strokeWidth="3" mask="url(#path-2-inside-1_106_1243)"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <circle cx="25" cy="25" r="25" fill="#367639"/>
                            <rect x="12" y="13" width="25" height="25" fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_106_1246" transform="scale(0.00195312)"/>
                                </pattern>
                                <image id="image0_106_1246" width="512" height="512"
                                       xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#367639"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.3749 24.6099C19.7436 21.7874 23.3236 19.9267 25.1148 19.0277C30.2292 16.4608 31.2919 16.0149 31.9846 16.0002C32.1369 15.9969 32.4776 16.0425 32.6982 16.2585C32.8845 16.4409 32.9358 16.6874 32.9603 16.8603C32.9848 17.0333 33.0154 17.4273 32.9911 17.7351C32.714 21.249 31.5147 29.7762 30.9046 33.7118C30.6465 35.3771 30.1382 35.9354 29.6461 35.9901C28.5766 36.1088 27.7645 35.1372 26.7287 34.3179C25.1078 33.0358 24.1921 32.2377 22.6188 30.9867C20.8005 29.5408 21.9792 28.7462 23.0154 27.4475C23.2866 27.1076 27.9987 21.9358 28.0899 21.4667C28.1013 21.408 28.1119 21.1893 28.0042 21.0738C27.8965 20.9583 27.7376 20.9978 27.6229 21.0292C27.4604 21.0737 24.871 23.1389 19.8549 27.2247C19.1199 27.8337 18.4542 28.1304 17.8577 28.1149C17.2001 28.0977 15.9353 27.6663 14.995 27.2974C13.8417 26.8451 12.925 26.6059 13.0048 25.8376C13.0464 25.4374 13.5031 25.0282 14.3749 24.6099Z"
                                  fill="white"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#367639"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.3749 24.6099C19.7436 21.7874 23.3236 19.9267 25.1148 19.0277C30.2292 16.4608 31.2919 16.0149 31.9846 16.0002C32.1369 15.9969 32.4776 16.0425 32.6982 16.2585C32.8845 16.4409 32.9358 16.6874 32.9603 16.8603C32.9848 17.0333 33.0154 17.4273 32.9911 17.7351C32.714 21.249 31.5147 29.7762 30.9046 33.7118C30.6465 35.3771 30.1382 35.9354 29.6461 35.9901C28.5766 36.1088 27.7645 35.1372 26.7287 34.3179C25.1078 33.0358 24.1921 32.2377 22.6188 30.9867C20.8005 29.5408 21.9792 28.7462 23.0154 27.4475C23.2866 27.1076 27.9987 21.9358 28.0899 21.4667C28.1013 21.408 28.1119 21.1893 28.0042 21.0738C27.8965 20.9583 27.7376 20.9978 27.6229 21.0292C27.4604 21.0737 24.871 23.1389 19.8549 27.2247C19.1199 27.8337 18.4542 28.1304 17.8577 28.1149C17.2001 28.0977 15.9353 27.6663 14.995 27.2974C13.8417 26.8451 12.925 26.6059 13.0048 25.8376C13.0464 25.4374 13.5031 25.0282 14.3749 24.6099Z"
                                  fill="white"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <p className="fs-13 fw-400 text-neutral-0">
                        © ООО МАТАДОР, 2023
                    </p>
                    <a href="#" className="fs-13 fw-400 text-neutral-0 mt-[8px] block">
                        Пользовательское соглашение
                    </a>
                    <a href="#" className="fs-13 fw-400 text-neutral-0 mt-[8px] block">
                        Политика конфиденциальности
                    </a>
                </div>
                <div className="flex gap-[20px]">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="min-w-[50px] min-h-[50px]">
                        <circle cx="25" cy="25" r="24.5" fill="black" stroke="black"/>
                        <path
                            d="M18.635 20.5V31H16.205V22.45H14.105V20.5H18.635ZM27.644 25.48C28.164 25.74 28.559 26.08 28.829 26.5C29.109 26.92 29.249 27.405 29.249 27.955C29.249 28.605 29.064 29.175 28.694 29.665C28.324 30.145 27.804 30.52 27.134 30.79C26.464 31.05 25.689 31.18 24.809 31.18C23.929 31.18 23.154 31.05 22.484 30.79C21.824 30.52 21.309 30.145 20.939 29.665C20.579 29.175 20.399 28.605 20.399 27.955C20.399 27.405 20.534 26.92 20.804 26.5C21.084 26.08 21.479 25.74 21.989 25.48C21.599 25.24 21.299 24.94 21.089 24.58C20.879 24.21 20.774 23.79 20.774 23.32C20.774 22.71 20.944 22.18 21.284 21.73C21.624 21.28 22.099 20.935 22.709 20.695C23.319 20.445 24.019 20.32 24.809 20.32C25.609 20.32 26.314 20.445 26.924 20.695C27.544 20.935 28.024 21.28 28.364 21.73C28.704 22.18 28.874 22.71 28.874 23.32C28.874 23.79 28.769 24.21 28.559 24.58C28.349 24.94 28.044 25.24 27.644 25.48ZM24.809 22.105C24.319 22.105 23.924 22.225 23.624 22.465C23.334 22.695 23.189 23.015 23.189 23.425C23.189 23.825 23.334 24.14 23.624 24.37C23.914 24.6 24.309 24.715 24.809 24.715C25.309 24.715 25.709 24.6 26.009 24.37C26.309 24.14 26.459 23.825 26.459 23.425C26.459 23.015 26.309 22.695 26.009 22.465C25.709 22.225 25.309 22.105 24.809 22.105ZM24.809 29.395C25.419 29.395 25.899 29.26 26.249 28.99C26.609 28.71 26.789 28.34 26.789 27.88C26.789 27.42 26.609 27.055 26.249 26.785C25.899 26.515 25.419 26.38 24.809 26.38C24.209 26.38 23.734 26.515 23.384 26.785C23.034 27.055 22.859 27.42 22.859 27.88C22.859 28.35 23.034 28.72 23.384 28.99C23.734 29.26 24.209 29.395 24.809 29.395ZM37.8464 26.665H35.2364V29.215H33.3014V26.665H30.7064V24.835H33.3014V22.285H35.2364V24.835H37.8464V26.665Z"
                            fill="white"/>
                    </svg>
                    <p className="fs-10 fw-400 text-neutral-0">
                        В соответствии с законодательством РФ,
                        мы не продаем и не доставляем алкогольную продукцию. Сформированные заказы вы можете оплатить и
                        получить в наших магазинах при условии предъявления документа, подтверждающего возраст .
                    </p>
                </div>
            </div>
            <MediaQuery query="(max-width: 1024px)">
                <div className="fixed bottom-0 w-[100%] bg-[#25282B] py-[10px] text-neutral-0-include">
                    <div className="fill-neutral-0-include-svg-stroke">
                        <DropList title="Каталог товаров" className="!border-[transparent] !px-[var(--wrap-padding)]">
                            <div className="w-[100%] pr-[var(--wrap-padding)]">
                                <div className="flex justify-between w-[100%] w1024:mt-[15px] pb-[1.125rem]">
                                    <ul>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Вино</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Вино России</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Игристое вино</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Коньяк</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Виски</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Граппа</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Крепкие напитки</li>
                                    </ul>
                                    <ul>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Аксессуары</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Подарки</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Гастрономия</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Миниатюры</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Пиво</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Сидр и пуаре</li>
                                        <li className="fs-15 fw-400 text-neutral-0 leading-[25px]">— Оборудование</li>
                                    </ul>
                                </div>
                            </div>
                        </DropList>
                        <DropList title="Магазины Сабонис" className="!border-[var(--color-neutral-900)] !px-[var(--wrap-padding)]">
                            <div className="">
                                <p className="fs-15 fw-500 text-neutral-0  mt-[40px] w1024:mt-[15px] pb-[1.125rem]">
                                    Санкт-Петербург, Петроградская наб. 8
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[20px]">
                                    Тел.: +7 (812) 409-96-98
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                                    Время работы: ежедневно,
                                    с 11:00 до 22:00
                                </p>
                                <p className="fs-15 fw-500 text-neutral-0 mt-[40px]">
                                    Санкт-Петербург, ул. Жуковского 10
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[20px]">
                                    Тел.: +7 (812) 602-74-41
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                                    Время работы: ежедневно,
                                    с 11:00 до 22:00
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[40px]">
                                    Email: info@sabonis.ru
                                </p>
                            </div>
                        </DropList>
                        <DropList title="Проект Wine&Dine" className="!border-[var(--color-neutral-900)] !px-[var(--wrap-padding)]">
                            <div className="">
                                <p className="fs-15 fw-500 text-neutral-0 mt-[40px]  w1024:mt-[15px]">
                                    Санкт-Петербург, Петроградская наб. 8
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[30px]">
                                    Тел.: +7 (812) 409-96-98, +7 (931) 105-47-18
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                                    Email: bilety@wineanddine.group
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                                    Сайт: https://wineanddine.group
                                </p>
                                <a href="#" className="fs-15 fw-400 underline text-neutral-0 mt-[30px]">
                                    Афиша мероприятий и дегустаций
                                </a>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[30px]">
                                    Время работы:
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0 mt-[10px]">
                                    <b className="text-neutral-0">пн - ср</b> 11.00 - 23.00
                                </p>

                                <p className="fs-15 fw-400 text-neutral-0">
                                    <b className="text-neutral-0">чт</b> 11.00 - 00.00
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0">
                                    <b className="text-neutral-0">пт - сб</b> 11.00 - 01.00
                                </p>
                                <p className="fs-15 fw-400 text-neutral-0">
                                    <b className="text-neutral-0">вс</b> 11.00 - 23.00
                                </p>
                            </div>
                        </DropList>
                    </div>

                    <ul className="flex items-center justify-center gap-4">
                        <li>
                            <Link to="">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path
                                        d="M21.7259 15.2716C22.7258 15.4392 23.6341 15.9115 24.3592 16.6351C25.0843 17.3587 25.5538 18.2652 25.7255 19.263M21.8786 12C23.657 12.3009 25.279 13.1426 26.5689 14.4261C27.8589 15.7134 28.6985 17.3321 29 19.1069M27.6108 26.1681C27.6108 26.1681 26.6452 27.1164 26.4086 27.3944C26.0232 27.8058 25.569 28 24.9737 28C24.9164 28 24.8553 28 24.7981 27.9962C23.6646 27.9238 22.6113 27.482 21.8213 27.105C19.6612 26.0614 17.7644 24.5799 16.1883 22.7022C14.8869 21.1369 14.0167 19.6896 13.4404 18.1357C13.0855 17.1873 12.9558 16.4485 13.013 15.7515C13.0512 15.3059 13.2229 14.9364 13.5397 14.6203L14.8411 13.3216C15.0281 13.1464 15.2265 13.0512 15.4212 13.0512C15.6616 13.0512 15.8562 13.1959 15.9784 13.3178C15.9822 13.3216 15.986 13.3254 15.9898 13.3292C16.2226 13.5463 16.444 13.771 16.6768 14.011C16.7951 14.1328 16.9172 14.2547 17.0393 14.3804L18.0812 15.4201C18.4857 15.8239 18.4857 16.1971 18.0812 16.6008C17.9705 16.7113 17.8637 16.8217 17.753 16.9284C17.4324 17.2559 17.6843 17.0046 17.3522 17.3016C17.3446 17.3093 17.337 17.3131 17.3331 17.3207C17.0049 17.6482 17.066 17.9682 17.1347 18.1852C17.1385 18.1967 17.1423 18.2081 17.1461 18.2195C17.4171 18.8746 17.7987 19.4916 18.3788 20.2267L18.3827 20.2305C19.436 21.5254 20.5466 22.5347 21.7716 23.3078C21.9281 23.4069 22.0884 23.4868 22.241 23.563C22.3784 23.6316 22.5082 23.6963 22.6189 23.7649C22.6341 23.7725 22.6494 23.7839 22.6647 23.7915C22.7944 23.8563 22.9166 23.8867 23.0425 23.8867C23.3593 23.8867 23.5577 23.6887 23.6226 23.6239L24.3707 22.8774C24.5004 22.7479 24.7065 22.5918 24.9469 22.5918C25.1836 22.5918 25.3782 22.7403 25.4965 22.8698C25.5003 22.8736 25.5003 22.8736 25.5041 22.8774L27.607 24.976C28.0001 25.3644 27.6108 26.1681 27.6108 26.1681Z"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li>

                            <Link to="">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path d="M22.0114 22.0114L26.668 26.668" stroke="white" strokeWidth="2"
                                          strokeLinecap="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.332 23.334C21.0935 23.334 23.332 21.0954 23.332 18.334C23.332 15.5726 21.0935 13.334 18.332 13.334C15.5706 13.334 13.332 15.5726 13.332 18.334C13.332 21.0954 15.5706 23.334 18.332 23.334Z"
                                          stroke="white" strokeWidth="2"/>
                                </svg>
                            </Link>
                        </li>
                        <li>

                            <Link to="">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#367639"/>
                                    <path
                                        d="M26.63 15.4575C26.2469 15.0742 25.7921 14.7702 25.2915 14.5628C24.7909 14.3554 24.2544 14.2486 23.7125 14.2486C23.1706 14.2486 22.6341 14.3554 22.1335 14.5628C21.6329 14.7702 21.1781 15.0742 20.795 15.4575L20 16.2525L19.205 15.4575C18.4312 14.6837 17.3818 14.249 16.2875 14.249C15.1932 14.249 14.1438 14.6837 13.37 15.4575C12.5962 16.2313 12.1615 17.2807 12.1615 18.375C12.1615 19.4693 12.5962 20.5187 13.37 21.2925L14.165 22.0875L20 27.9225L25.835 22.0875L26.63 21.2925C27.0132 20.9094 27.3173 20.4546 27.5247 19.954C27.7321 19.4534 27.8389 18.9169 27.8389 18.375C27.8389 17.8331 27.7321 17.2966 27.5247 16.796C27.3173 16.2954 27.0132 15.8406 26.63 15.4575V15.4575Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </li>
                        <li>

                            <Link to="">
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
                            </Link>
                        </li>
                        <li>
                            <Link to="">
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
                            </Link>
                        </li>
                    </ul>
                </div>
            </MediaQuery>
        </footer>
    );
}
