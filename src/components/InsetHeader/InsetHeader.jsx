import React from 'react';
import Label from '../common/Label/Label';
import styles from './InsetHeader.module.scss'
import { TiMessage } from 'react-icons/ti'
import { BsHeart } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'

function InsetHeader() {
    return (
        <div className={styles.page}>
            <div className={`${styles.insetHeader} ${styles.noBackground}`}>
                <div className={styles.background}></div>
                <div className={styles.wrapper}>
                    <Label
                        type="green"
                        children="Featured Product"
                    />
                    <h2 className={styles.title}>Responsive Resize Kit</h2>
                    <h4 className={styles.meta}>A handy collection of web, tablet & mobile responsive screens for XD.</h4>
                    <ul className={styles.actions}>
                        <li className={`${styles.action} ${styles.actionCmt}`}>
                            <a className={`${styles.btn} ${styles.btnGray}`}>
                                <TiMessage className={styles.icon} />
                                <span>31</span>
                            </a>
                        </li>
                        <li className={styles.action}>
                            <a className={`${styles.btn} ${styles.btnGray}`}>
                                <BsHeart className={styles.icon} />
                                <span>194</span>
                            </a>
                        </li>
                        <li className={styles.action}>
                            <a className={`${styles.btn} ${styles.btnGreen}`}>
                                <FiDownload className={`${styles.icon} ${styles.iconDownload}`} />
                                <span className={styles.label}>Download</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InsetHeader;