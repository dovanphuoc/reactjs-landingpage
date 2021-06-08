import React from 'react';
import styles from './FooterBottom.module.scss'
import { AiTwotoneLock } from 'react-icons/ai'
import { FaCcPaypal, FaStripe } from 'react-icons/fa'

function FooterBottom() {
    return (
        <div className={styles.footerColumn}>
            <div className={`${styles.pullLeft} ${styles.copyright}`}>
                <span>© 2021, UI8 LLC.</span>
            </div>
            <div className={`${styles.payment} ${styles.pullRight}`}>
                <AiTwotoneLock className={`${styles.icon} ${styles.iconLock}`} />
                <span>Secure payment:</span>
                <FaCcPaypal className={`${styles.icon} ${styles.paypal}`} />
                <FaStripe className={`${styles.icon} ${styles.stripe}`} />
            </div>
        </div>
    );
}

export default FooterBottom;