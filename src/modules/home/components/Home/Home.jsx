import { MedicalCard } from "../MedicalСard/MedicalCard";
import { Receptions } from "../Receptions/Receptions";
import { RepresentationInfo } from "../RepresentationInfo/RepresentationInfo";
import styles from "./styles.module.css";

export const Home = () => {
    return (
        <section className={styles["home"]}>
            <RepresentationInfo />
            <Receptions />
            <MedicalCard />
        </section>
    );
};
