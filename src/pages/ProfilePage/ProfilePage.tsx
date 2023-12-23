import {Breadcrumbs} from "@shared/Breadcrumbs";
import {FormInput} from "@shared/FormInput";
import {Button} from "@shared/Button";
import {Link} from "react-router-dom";

export function ProfilePage() {
    return (
        <>
            <section className="wrap mt-[30px]">
                <Breadcrumbs linksArray={[
                    {
                        title: "Главная",
                        link: "/"
                    },
                    {
                        title: "Личный кабинет",
                        link: "/profile"
                    }
                ]}></Breadcrumbs>
                <h1 className="mt-[30px] fs-30 fw-500 text-neutral-900">Личный кабинет</h1>
                <div className="grid grid-cols-[1fr_40%] mt-[30px] gap-[40px]">
                    <div className="w-[100%]">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[1px] border-[var(--color-primary)]  rounded-[5px_5px_0_0]">
                            <span className="fs-15 uppercase text-neutral-0 w-[100%] block text-center leading-[50px]">Личные данные</span>
                        </div>
                        <form className="mt-[40px] pr-[50px] grid grid-cols-2 gap-y-[25px] gap-x-[50px]">
                            <span className="fs-20 fw-500 text-neutral-900">О вас</span>
                            <span className="fs-20 fw-500 text-neutral-900">Пароль</span>
                            <FormInput label="Имя" placeholder="Иван Иванович Иванов"></FormInput>
                            <FormInput label="Имя" placeholder="Иван Иванович Иванов"></FormInput>
                            <FormInput label="Имя" placeholder="Иван Иванович Иванов"></FormInput>
                            <FormInput label="Имя" placeholder="Иван Иванович Иванов"></FormInput>
                            <FormInput label="Имя" placeholder="Иван Иванович Иванов"></FormInput>
                            <Button className="h-[52px] self-end border-[1px] border-[var(--color-primary)]">Сохранить</Button>
                        </form>
                    </div>
                    <div className=" border-[1px] border-[#D6D7D9] h-fit rounded-[5px]">
                        <div
                            className="py-[5px] bg-[var(--color-primary)] border-[var(--color-primary) rounded-[5px_5px_0_0]">
                            <span className="fs-15 uppercase text-neutral-0 text-center leading-[50px] w-[100%] block">Меню</span>
                        </div>
                        <div className="px-[20px] py-[40px]">
                            <Link className="text-primary fs-20 fw-400 leading-[20px] block mb-[15px]" to="profile">Личные данные</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]" to="profile/history">История заказов</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block mb-[15px]" to="profile/store">Купленные товары</Link>
                            <Link className="text-neutral-900 fs-20 fw-400 leading-[20px] block" to="profile/points">Баллы (1999)</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
