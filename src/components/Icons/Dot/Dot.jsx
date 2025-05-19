import styles from "./styles.module.css";

export const Dot = ({ width = 12, height = 12, count = undefined }) => {
    return (
        <div style={{ width, height }} className={styles["dot"]}>
            {count}
        </div>
    );
};
