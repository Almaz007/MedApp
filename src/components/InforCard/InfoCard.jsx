import { Dot } from "../Icons/Dot/Dot";
import styles from "./styles.module.css";
import cn from "classnames";
export const InfoCard = ({
    icon,
    title,
    descTitle,
    notificationCount,
    line = true,
}) => {
    return (
        <div className={styles["info-card"]}>
            <div className={styles["icon"]}>{icon}</div>
            <div
                className={cn(styles["row"], {
                    [styles["line"]]: line,
                })}
            >
                <div className={styles["info"]}>
                    <div className={styles["title"]}>{title}</div>
                    {descTitle && (
                        <div className={styles["desc-title"]}>{descTitle}</div>
                    )}
                </div>
                {notificationCount && (
                    <Dot width={20} height={20} count={notificationCount} />
                )}
            </div>
        </div>
    );
};
