import { Appointment } from "../../../../components/Icons/Appointment/Appointment";
import { Dot } from "../../../../components/Icons/Dot/Dot";
import { Prescription } from "../../../../components/Icons/Prescription/Prescription";
import { Referral } from "../../../../components/Icons/Referral/Referral";
import { Sertificate } from "../../../../components/Icons/Sertificate/Sertificate";

import styles from "./styles.module.css";
import cn from "classnames";

export const MedicalCard = () => {
    return (
        <div>
            <div className={styles["title"]}>Медицинская карта</div>

            <div className={styles["cards"]}>
                <div className={styles["rows"]}>
                    <div className={cn(styles["cell"], styles["cell-1"])}>
                        <h2 className={styles["icon"]}>
                            <Appointment />
                        </h2>
                        <div className={styles["desc"]}>
                            <div className={styles["name"]}>Приёмы</div>
                            <div className={styles["noification"]}>
                                <Dot width={16} height={16} count={+2} />
                            </div>
                        </div>
                    </div>
                    <div className={cn(styles["cell"], styles["cell-2"])}>
                        <h2 className={styles["icon"]}>
                            <Sertificate />
                        </h2>
                        <div className={styles["desc"]}>
                            <div className={styles["name"]}>Справки</div>
                        </div>
                    </div>
                </div>
                <div className={styles["rows"]}>
                    <div className={cn(styles["cell"], styles["cell-3"])}>
                        <h2 className={styles["icon"]}>
                            <Referral />
                        </h2>
                        <div className={styles["desc"]}>
                            <div className={styles["name"]}>Направления</div>
                        </div>
                    </div>
                    <div className={cn(styles["cell"], styles["cell-4"])}>
                        <h2 className={styles["icon"]}>
                            <Prescription />
                        </h2>
                        <div className={styles["desc"]}>
                            <div className={styles["name"]}>Рецепты</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
