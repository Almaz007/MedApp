import { Button } from "../../../../components/Button/Button";
import styles from "./styles.module.css";
import { ReceptionCard } from "../ReceptionCard/ReceptionCard";

const receptions = [
    {
        date: "12 февр., ср",
        time: "00:30",
        doctorProfession: "Терапевт",
        clientName: "Иванов И.И. каб. 213",
    },
    {
        date: "21 февр., ср",
        time: "09:15",
        doctorProfession: "Оториноларинголог",
        clientName: "Иванов И. И. каб. 213",
    },
];

export const Receptions = () => {
    return (
        <div>
            <h2 className={styles["title"]}>Ближайшие приемы</h2>
            <div className={styles["receptions"]}>
                {receptions.map((reception, index) => (
                    <ReceptionCard
                        key={index}
                        time={reception.time}
                        date={reception.date}
                        doctorProfession={reception.doctorProfession}
                        clientName={reception.clientName}
                    />
                ))}
            </div>
            <Button text="Записаться" className={styles["btn"]} />
        </div>
    );
};
