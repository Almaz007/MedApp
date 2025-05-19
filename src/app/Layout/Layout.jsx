import { Outlet } from "react-router";
import styles from "./styles.module.css";
import { Header } from "../../components/Header/Header";
import { ButtonNav } from "../../components/ButtomNav/ButtomNav";

export const Layout = () => {
    return (
        <>
            <div className={styles["container"]}>
                <Header />
                <Outlet />
            </div>
            <ButtonNav />
        </>
    );
};
