import React from 'react';
import FooterBottom from '../FooterBottom/FooterBottom';
import MidFooter from '../MidFooter/MidFooter';
import FooterTop from '../TopFooter/FooterTop';
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <FooterTop></FooterTop>
                <MidFooter></MidFooter>
                <FooterBottom></FooterBottom>
            </div>
        </div>
    );
}

export default Footer;