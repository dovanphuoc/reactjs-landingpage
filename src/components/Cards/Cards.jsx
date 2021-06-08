import React from 'react';
import styles from './Cards.module.scss';
import { AiFillHeart, AiOutlineEye } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/img/logo.svg'

function Cards({
    thumbnail = '',
    title = '',
    featured = '',
    votes = null,
    price = null,
}) {
    const styling = {
        position: 'relative',
        height: '210px',
        borderRadius: '4px',
        background: `url(${thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className={styles.card}>
            <div className={styles.cardWrapper}>
                <div className={styles.cardFigure} style={styling}>
                    <div className={styles.likes}>
                        <span className={styles.count}>{votes}</span>
                        <a className={styles.btnCircle}>
                            <AiFillHeart className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.hover}>
                        <div className={styles.group}>
                            <a href="#btn" className={styles.btn}>
                                <AiOutlineEye className={styles.icon} />
                            </a>
                            <a href="#btn" className={styles.btn}>
                                <FaShoppingCart className={styles.icon} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.heading}>
                        <a className={styles.cardTitle}>{title}</a>
                        <span className={styles.cardPrice}>{price}</span>
                    </div>
                    <div className={styles.metaContainer}>
                        <div className={styles.meta}>
                            <div className={styles.sub}>
                                <a href="#avatar">
                                    <img width="20" height="20" src={logo} alt="logo" className={styles.avatar} />
                                </a>
                                by 
                                <a href="#ui8" className={styles.ui8}>UI8</a>
                                <span>in 
                                    <a href="#resources" className={styles.resource}>  Figma Resources</a>
                                </span>
                            </div>
                            <span className={styles.cardFeatured}>{featured}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;