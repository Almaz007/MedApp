import styles from "./styles.module.css";

export const ReceptionCard = ({ time, date, doctorProfession, clientName }) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["date-time"]}>
                <div className={styles["time"]}>{time}</div>
                <div className={styles["date"]}>{date}</div>
            </div>
            <div className={styles["vertical-line"]}></div>
            <div className={styles["info"]}>
                <div className={styles["doctor-profession"]}>
                    {doctorProfession}
                </div>
                <div className={styles["сlient-name"]}>{clientName}</div>
            </div>
        </div>
    );
};
