import { NavLink } from "react-router";
import styles from "./styles.module.css";
import { HomeIcon } from "../Icons/HomeIcon/HomeIcon";
import { Folder } from "../Icons/FolderIcon/Folder";
import { Settings } from "../Icons/Settings/Settings";

export const ButtonNav = () => {
    return (
        <div className={styles["button-nav"]}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.isActive}` : styles.link
                }
            >
                <HomeIcon className={styles["icon"]} />
                <div className={styles["name"]}>Главная</div>
            </NavLink>

            <NavLink
                to="/medicalCard"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.isActive}` : styles.link
                }
            >
                <Folder className={styles["icon"]} />
                <div className={styles["name"]}>Медкарта</div>
            </NavLink>

            <NavLink
                to="/more"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.isActive}` : styles.link
                }
            >
                <Settings className={styles["icon"]} />
                <div className={styles["name"]}>Еще</div>
            </NavLink>
        </div>
    );
};
