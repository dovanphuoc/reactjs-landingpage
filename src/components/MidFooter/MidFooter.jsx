import React, { Fragment } from 'react';
import styles from './MidFooter.module.scss'
import Button from '../common/Button/Button'

function MidFooter() {
    return (
        <Fragment>
            <div className={styles.footerColumn}>
                <div className={`${styles.footerItem} ${styles.pullLeft} ${styles.margin}`}>
                    <Button
                        type="primary"
                        children="Sell Products"
                    />
                    <div className={styles.author}>
                        <span>Earn 70% and more on all sales</span>
                    </div>
                </div>
                <div className={`${styles.footerItem} ${styles.pullLeft} ${styles.footerResponsive}`}>
                    <Button
                        type="green"
                        children="Become a partner"
                    />
                    <div className={styles.author}>
                        <span>Earn some serious cash promoting UI8</span>
                    </div>
                </div>
                <div className={`${styles.footerItem} ${styles.pullRight} ${styles.margin}`}>
                    <div className={styles.count}>
                        <span className={styles.number}>447,326</span>
                        <span className={styles.caption}>Members</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>4,894</span>
                        <span className={styles.caption}>Products</span>
                    </div>
                    <div className={styles.count}>
                        <span className={styles.number}>2,195</span>
                        <span className={styles.caption}>Authors</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MidFooter;