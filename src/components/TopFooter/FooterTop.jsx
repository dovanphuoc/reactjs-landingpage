import React, { Fragment } from 'react';
import styles from './FooterTop.module.scss'
import slackImage from '../../assets/img/thumb15.png'
import { AiOutlineArrowRight, AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookSquare, FaPinterest, FaTwitter } from 'react-icons/fa'

function FooterTop() {
    return (
        <Fragment>
            <div className={styles.footerColumn}>
                <div className={`${styles.footerColumnProduct} ${styles.pullLeft}`}>
                    <h4>Products</h4>
                    <ul className={`${styles.pullLeft} ${styles.footerMenu}`}>
                        <li>
                            <a href="#link" className={styles.listLink}>UI Kits</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Wireframe Kits</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Icon Sets</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Fonts</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Presentation</a>
                        </li>
                    </ul>
                    <ul className={`${styles.pullLeft} ${styles.footerMenu} ${styles.footerResponsive}`}>
                        <li>
                            <a href="#link" className={styles.listLink}>Mockups</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>For Sketch</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Themes & Templates</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Freebies</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>All-Access Pass</a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerColumnProduct} ${styles.pullLeft} ${styles.footerResponsive}`}>
                    <h4>Company</h4>
                    <ul className={`${styles.pullLeft} ${styles.footerMenu}`}>
                        <li>
                            <a href="#link" className={styles.listLink}>Support</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Open a Shop</a>
                        </li>
                        <li>
                            <a href="#link" className={styles.listLink}>Licensing & Terms</a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerColumnProduct} ${styles.pullLeft} ${styles.pullRightReponsive}`}>
                    <div className={styles.footerRow}>
                        <h4>Join our growing slack community</h4>
                        <div className={styles.join}>
                            <div className={styles.joinForm}>
                                <div className={styles.joinField}>
                                    <div className={styles.fieldWrap}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email to get an invite"
                                            className={styles.fieldInput}
                                        />
                                        <img src={slackImage} alt="slack image" className={styles.slackImg} />
                                    </div>
                                </div>
                                <button className={styles.btn}>
                                    <AiOutlineArrowRight className={styles.icon} />
                                </button>
                            </div>
                        </div>
                        <div className={styles.signup}>
                            <span>3,624 active members are waiting for you</span>
                        </div>
                    </div>
                    <div className={`${styles.footerRow} ${styles.socialLink}`}>
                        <span>Follow us</span>
                        <div className={styles.linkContainer}>
                            <a href="#link" className={styles.socialLink}>
                                <AiOutlineDribbble className={styles.icon} />
                            </a>
                            <a href="#link" className={styles.socialLink}>
                                <FaTwitter className={styles.icon} />
                            </a>
                            <a href="#link" className={styles.socialLink}>
                                <AiOutlineInstagram className={styles.icon} />
                            </a>
                            <a href="#link" className={styles.socialLink}>
                                <FaFacebookSquare className={styles.icon} />
                            </a>
                            <a href="#link" className={styles.socialLink}>
                                <FaPinterest className={styles.icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FooterTop;