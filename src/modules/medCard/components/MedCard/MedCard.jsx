import { Anallysis } from "../../../../components/Icons/Anallysis/Anallysis";
import { Appointment } from "../../../../components/Icons/Appointment/Appointment";
import { Prescription } from "../../../../components/Icons/Prescription/Prescription";
import { Referral } from "../../../../components/Icons/Referral/Referral";
import { Research } from "../../../../components/Icons/Research/Research";
import { Sertificate } from "../../../../components/Icons/Sertificate/Sertificate";
import { Vaccination } from "../../../../components/Icons/Vaccination/Vaccination";
import { InfoCard } from "../../../../components/InforCard/InfoCard";

import styles from "./styles.module.css";

const generals = [
    {
        icon: <Appointment />,
        title: "Приемы",
        descTitle: "Информация о визитах к врачу",
        notificationCount: "+2",
    },
    {
        icon: <Anallysis />,
        title: "Анализы",
        descTitle: "Результаты лабораторных исследований",
    },
    {
        icon: <Research />,
        title: "Исследования",
        descTitle: "Результаты инструментальных и диагностических процедур",
        // notificationCount: "+1",
    },
    {
        icon: <Vaccination />,
        title: "Вакцинации",
        descTitle: "Записи о проведенных прививках",
    },
];
const documentations = [
    {
        icon: <Sertificate />,
        title: "Справки",
        descTitle: "Документы о состоянии здоровья",
    },
    {
        icon: <Prescription />,
        title: "Рецепты",
        descTitle: "Записи о назначенных препаратах",
    },
    {
        icon: <Referral />,
        title: "Направления",
        descTitle: "Документы для дополнительных обследований или консультаций",
    },
];

export const MedCard = () => {
    return (
        <>
            <section className={styles["section"]}>
                <h2 className={styles["title"]}>Общее</h2>
                <div className={styles["cards"]}>
                    {" "}
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
            <section className={styles["section"]}>
                <h2 className={styles["title"]}>Документация</h2>
                <div className={styles["cards"]}>
                    {documentations.map((item, index) => {
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
        </>
    );
};
