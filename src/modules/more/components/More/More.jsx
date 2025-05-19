import { Anallysis } from "../../../../components/Icons/Anallysis/Anallysis";
import { Family } from "../../../../components/Icons/Family/Family";
import { Help } from "../../../../components/Icons/Help/Help";
import { Nofication } from "../../../../components/Icons/Notification/Notification";
import { Siren } from "../../../../components/Icons/Siren/Siren";
import { Theme } from "../../../../components/Icons/Theme/Theme";
import { UserInfo } from "../../../../components/Icons/UserInfo/UserInfo";
import { Vaccination } from "../../../../components/Icons/Vaccination/Vaccination";
import { InfoCard } from "../../../../components/InforCard/InfoCard";
import styles from "./styles.module.css";

const generals = [
    {
        icon: <UserInfo />,
        title: "Личные данные",
    },
    {
        icon: <Family />,
        title: "Семейный доступ",
    },
    {
        icon: <Nofication countVisible={false} />,
        title: "Настройки уведомлений",
        // notificationCount: "+1",
    },
    {
        icon: <Help />,
        title: "Помощь и поддержка",
    },
    {
        icon: <Theme />,
        title: "Тема оформления",
    },
];
export const More = () => {
    return (
        <>
            <section className={styles["section"]}>
                <div className={styles["cards"]}>
                    {generals.map((item, index) => {
                        const lastIndex = generals.length - 1;
                        return (
                            <InfoCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                descTitle={item.descTitle}
                                notificationCount={item.notificationCount}
                                line={lastIndex !== index}
                            />
                        );
                    })}
                </div>
            </section>
            <hr className={styles["line"]} />
            <section className={styles["section"]}>
                <div className={styles["cards"]}>
                    <InfoCard
                        icon={<Siren />}
                        title={"Экстренная информация"}
                        descTitle={
                            "Важные данные пациента (аллергии, хронические заболевания и контакты)"
                        }
                        line={false}
                    />
                </div>
            </section>
            <div className={styles["text"]}>
                <p>Электронная медицинская карта </p>
                <p>Версия 1.0.0</p>
            </div>
        </>
    );
};
