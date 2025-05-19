import styles from "./styles.module.css";

export const RepresentationInfo = () => {
    return (
        <div className={styles["representation-info"]}>
            <div className={styles["info"]}>
                <h2 className={styles["title"]}>
                    Новая вакцина уже в больнице
                </h2>
                <div className={styles["text"]}>
                    Каждый желающий может воспользоваться ею по адресу Пирогов
                </div>
            </div>
            <div className={styles["image"]}>
                <img src="/public/images/RepresentationPhoto.png" alt="img" />
            </div>
        </div>
    );
};
