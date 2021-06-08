import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/img/logo.svg'
import { FaShoppingCart } from 'react-icons/fa'
import { IoLogoBuffer } from 'react-icons/io'
import { VscSearch } from 'react-icons/vsc'
import Cards from '../Cards/Cards';
import Button from '../common/Button/Button';
import Label from '../common/Label/Label';

function Header() {
    const cardData = [
        {
            thumbnail: 'https://images.ui8.net/uploads/thumbnail_1620747726662.png',
            votes: '201',
            title: 'Fitness Pro: Website UI Kit',
            featured: 'Featured',
            price: '$98',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/product-card_1595801401544.png',
            votes: '452',
            title: 'Collab — Landing Page Kit',
            featured: 'Featured',
            price: '$64',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/unity-thumb_1601909028720.png',
            votes: '599',
            title: 'Unity Dashboard Kit',
            featured: 'Featured',
            price: '$68',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/thumbnail-02_1611587925306.png',
            votes: '302',
            title: 'Unity Dashboard Kit: Exchange🤑',
            featured: 'Featured',
            price: '$88',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/inertia-cover_1620744409789.png',
            votes: '173',
            title: 'Inertia Multipurpose Bootstrap 5',
            featured: 'Featured',
            price: '$79',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/thumbnail_1598294232896.png',
            votes: '318',
            title: 'Folio: Agency Portfolio Kit',
            featured: 'Featured',
            price: '$68',
        },
    ]
    return (
        <div className={styles.header}>
            <div className={`${styles.header__center} ${styles.center}`}>
                <div className={styles.header__left}>
                    <a href="#home">
                        <img src={logo} alt="logo" className={styles.logo} />
                    </a>
                    <div className={`${styles.header__group} ${styles.header__group_cats} ${styles.headerTitleResponsive}`}>
                        <div className={`${styles.header__cat} ${styles.active}`}>
                            <div className={`${styles.header__title}`}>Browse</div>
                        </div>
                        <div className={styles.header__dropdown}>
                            <div className={styles.header__list}>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Featured Products</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Featured Products</div>
                                    <div className={styles.header__number}>1787</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Wireframe Kits</div>
                                    <div className={styles.header__number}>161</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Illustrations</div>
                                    <div className={styles.header__number}>788</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>3D Assets</div>
                                    <div className={styles.header__number}>87</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Icon Sets</div>
                                    <div className={styles.header__number}>946</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Fonts</div>
                                    <div className={styles.header__number}>308</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Presentation</div>
                                    <div className={styles.header__number}>324</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Mockup</div>
                                    <div className={styles.header__number}>411</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>For Sktech</div>
                                    <div className={styles.header__number}>1546</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>For Figma</div>
                                    <div className={styles.header__number}>1447</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Themes & Templates</div>
                                    <div className={styles.header__number}>467</div>
                                </a>
                                <a href="#featured-products" className={styles.header__type}>
                                    <div className={styles.header__icon}>
                                        <IoLogoBuffer className={styles.icon} />
                                    </div>
                                    <div className={styles.header__theme}>Freebies</div>
                                    <div className={styles.header__number}>801</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className={styles.header__nav}>
                        <a className={styles.header__link} href="#access">All-Access Pass</a>
                        <a className={`${styles.header__link} ${styles.active} ${styles.headerLinkResponsive}`} href="#access">Coded Templates
                            <div className={styles.header__dropdown}>
                                <nav className={styles.cards}>
                                    {cardData.map(card => (
                                        <Cards
                                            thumbnail={card.thumbnail}
                                            title={card.title}
                                            featured={card.featured}
                                            votes={card.votes}
                                            price={card.price}
                                        />
                                    ))}
                                </nav>
                            </div>
                        </a>
                        <a className={`${styles.header__link} ${styles.active} ${styles.headerLinkResponsive}`} href="#access">3D Assets
                            <Label
                                type="green"
                                children="New"
                            />
                            <div className={styles.header__dropdown}>
                                <nav className={styles.cards}>
                                    {cardData.map(card => (
                                        <Cards
                                            thumbnail={card.thumbnail}
                                            title={card.title}
                                            featured={card.featured}
                                            votes={card.votes}
                                            price={card.price}
                                        />
                                    ))}
                                </nav>
                            </div>
                        </a>
                        <a className={`${styles.header__link} ${styles.headerLinkResponsive}`} href="#access">Sapiens</a>
                        <a className={`${styles.header__link}`} href="#access">
                            <VscSearch className={styles.icon} />
                        </a>
                    </nav>
                </div>
                <div className={styles.header__right}>
                    <a className={styles.header__link} href="#login">Log In</a>
                    <div className={styles.header__group}>
                        <a className={styles.header__cat}>
                            <div className={styles.header__custom}>
                                <FaShoppingCart className={styles.icon} />
                                <div className={styles.header__counter}>0</div>
                            </div>
                        </a>
                    </div>
                    <Button children="Sign up" type="primary dnone" size="m" />
                </div>
            </div>
        </div>
    );
}

export default Header;