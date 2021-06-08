import React from 'react';
import styles from './Form.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Form() {
    return (
        <div className={styles.joinForm}>
            <div className={`${styles.joinField} ${styles.field}`}>
                <div className={styles.fieldWrap}>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        tabIndex="1"
                        required
                        className={styles.fieldInput}
                        placeholder="Enter your email to join"
                    />
                </div>
            </div>
            <div className={styles.joinBtn}>
                <AiOutlineArrowRight className={styles.icon} />
            </div>
            <div className={styles.msg}>Plus nothing but quality pixels in your inbox every week.</div>
        </div>
    );
}

export default Form;