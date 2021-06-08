import React from 'react';
import styles from './Newsletter.module.scss'
import letterGifImage from '../../assets/img/letter.gif'
import Form from '../common/Form/Form'
function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <div className={`${styles.sectionCenter} ${styles.center}`}>
                <div className={styles.join}>
                    <div className={styles.joinWrap}>
                        <img src={letterGifImage} alt="anh gif" />
                    </div>
                    <div className={styles.joinTitle}>
                        Join our newsletter and get 
                        <span className={styles.modalLink}>3 free products</span>
                        , instantly.
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;