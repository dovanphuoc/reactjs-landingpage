import React from 'react';
import Button from '../common/Button/Button';
import styles from './Product.module.scss'
import { HiPlus } from 'react-icons/hi'
import Cards from '../Cards/Cards';

function Product({
    desc = ""
}) {
    const data = [
        {
            thumbnail: 'https://images.ui8.net/uploads/bento-matte-ui8-thumbnail-b_1622650903037.png',
            votes: '29',
            title: 'Bento Matte 3D Fintech',
            price: '$38',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/thumbnail_1622460599896.png',
            votes: '95',
            title: 'Fleet – Travel Shopping UI Kit',
            price: '$78',
        },
        {
            thumbnail: 'https://images.ui8.net/uploads/thumbnail_1622012647993.png',
            votes: '21',
            title: 'Healthcare 3D Icons',
            price: '$35',
        },
    ]
    return (
        <div className={`${styles.container} ${styles.product}`}>
            <a href="#products">
                <div className={styles.avatar}></div>
            </a>
            <p className={styles.seeMore}>{desc}</p>
            <div className={styles.btnWrap}>
                <Button
                    type="green"
                    children="Hire me"
                />
                <button className={`${styles.btn} ${styles.btnBlue}`}>
                    <HiPlus className={styles.icon} />
                    Follow
                </button>
            </div>
            <div className={`${styles.sectionContent} ${styles.cards}`}>
                {data.map(card => (
                    <Cards
                        thumbnail={card.thumbnail}
                        votes={card.votes}
                        title={card.title}
                        price={card.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;