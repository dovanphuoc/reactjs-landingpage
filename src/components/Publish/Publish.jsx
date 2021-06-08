import React from 'react';
import styles from './Publish.module.scss'

function Publish() {
    return (
        <div className={styles.publish}>
            <a className={styles.product} href="#product">
                <div className={styles.avatar}></div>
            </a>
            <span className={styles.by}>Published by  </span>
            <a href="#products" className={styles.ui}>UI8  </a>
            <span className={styles.by}>in  </span>
            <a href="#design" className={styles.category}>Design Freebies  </a>
            <span className={styles.compatibleWith}>compatible with  </span>
        </div>
    );
}

export default Publish;