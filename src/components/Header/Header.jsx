import { ChevronRight } from "../Icons/ChevronRight";
import { Nofication } from "../Icons/Notification/Notification";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-row"]}>
                <div className={styles["user-info"]}>
                    <img src="/public/images/Photo.png" alt="user-photo" />
                    <div className={styles["user-name"]}>Диана Павловна О.</div>
                    <ChevronRight
                        className={styles["icon"]}
                        width={16}
                        height={16}
                        strokeWidth={3}
                    />
                </div>
                <Nofication stroke="#48494E" />
            </div>
        </header>
    );
};
