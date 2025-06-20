import { Dot } from "../Dot/Dot";
import styles from "./styles.module.css";

export const Nofication = ({
    width = 24,
    height = 24,
    stroke = "#4B60D7",
    countVisible = true,
}) => {
    return (
        <div className={styles["icon"]}>
            <div className={styles["total-messages"]}>
                {countVisible && <Dot width={14} height={14} count={2} />}
            </div>
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                className={styles["notification"]}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18.75 9.71V9.005C18.75 5.136 15.726 2 12 2C8.274 2 5.25 5.136 5.25 9.005V9.71C5.2512 10.5516 5.01105 11.3758 4.558 12.085L3.45 13.81C2.439 15.385 3.211 17.526 4.97 18.024C9.56629 19.3257 14.4337 19.3257 19.03 18.024C20.789 17.526 21.561 15.385 20.55 13.811L19.442 12.086C18.9886 11.3769 18.7481 10.5527 18.749 9.711L18.75 9.71Z"
                    stroke={stroke}
                    strokeWidth="1.5"
                />
                <path
                    opacity="0.4"
                    d="M7.5 19C8.155 20.748 9.922 22 12 22C14.078 22 15.845 20.748 16.5 19M12 6V10"
                    stroke={stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};
