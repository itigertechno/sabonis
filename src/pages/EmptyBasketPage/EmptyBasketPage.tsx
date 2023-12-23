import {Breadcrumbs} from "@shared/Breadcrumbs";
import {Button} from "@shared/Button";
import {useNavigate} from "react-router-dom";

export function EmptyBasketPage() {
    const navigate = useNavigate();

    return (
        <>
            <section className="wrap mt-[30px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Корзина",
                        link: "/basket"
                    }
                ]}></Breadcrumbs>
                <h1 className="mt-[30px] fs-30 fw-500 text-neutral-900">Корзина</h1>
                <div className="flex justify-center items-center mt-[45px]">
                    <div className="w-[50%] flex flex-col items-center">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_357_2456)">
                                <path d="M37.5007 91.6667C39.8018 91.6667 41.6673 89.8012 41.6673 87.5C41.6673 85.1989 39.8018 83.3334 37.5007 83.3334C35.1995 83.3334 33.334 85.1989 33.334 87.5C33.334 89.8012 35.1995 91.6667 37.5007 91.6667Z" stroke="#494949" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M83.3327 91.6667C85.6339 91.6667 87.4994 89.8012 87.4994 87.5C87.4994 85.1989 85.6339 83.3334 83.3327 83.3334C81.0315 83.3334 79.166 85.1989 79.166 87.5C79.166 89.8012 81.0315 91.6667 83.3327 91.6667Z" stroke="#494949" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.16602 4.16663H20.8327L31.9994 59.9583C32.3804 61.8766 33.424 63.5998 34.9475 64.8262C36.4709 66.0526 38.3773 66.7041 40.3327 66.6666H80.8327C82.7881 66.7041 84.6944 66.0526 86.2179 64.8262C87.7414 63.5998 88.785 61.8766 89.166 59.9583L95.8327 25H24.9994" stroke="#494949" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_357_2456">
                                    <rect width="100" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className="fs-24 fw-400 text-neutral-900 mt-[40px]">Ваша корзина пуста</h2>
                        <p className="fs-15 fw-400 text-neutral-900 mt-[30px]">Перейдите в каталог, чтобы начать покупки.</p>
                        <div className="w-[25%]">
                            <Button onClick={() => navigate("/catalog")} className="mt-[50px]">Каталог</Button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
