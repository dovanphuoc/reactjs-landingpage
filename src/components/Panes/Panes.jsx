import React from 'react';
import styles from './Panes.module.scss'
import thumb7 from '../../assets/img/thumb7.png'
import thumb8 from '../../assets/img/thumb8.png'
import thumb9 from '../../assets/img/thumb9.png'
import thumb10 from '../../assets/img/thumb10.png'
import thumb11 from '../../assets/img/thumb11.png'
import thumb12 from '../../assets/img/thumb12.png'
import thumb13 from '../../assets/img/thumb13.png'
import thumb14 from '../../assets/img/thumb14.png'
import { HiCheck } from 'react-icons/hi'
import { BsDownload } from 'react-icons/bs'
import { SiAdobexd } from 'react-icons/si'
import Comments from '../Comments/Comments';
import PostComment from '../PostComment/PostComment';
import Product from '../Product/Product';

function Panes() {
    const data = [
        {
            avatar: 'https://images.ui8.net/uploads/beverage-black-and-white-coffee-19586_1533627140929.jpg',
            name: 'gig giga',
            message: 'very gooD!',
            created_at: '5 months ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/artboard_%E2%80%93_1_1588557993508.png',
            name: 'PABO CA',
            message: 'Thank you so much!!! Just what I needed!!',
            created_at: 'thanks so much! helps me a ton ;p'
        },
        {
            avatar: 'https://images.ui8.net/uploads/gwer2_1543006463492.jpg',
            name: 'boz',
            message: 'ty',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/untitled-1_1539440029279.jpg',
            name: 'CDI Brand Studio',
            message: 'Cool.Like it',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/avatar-fixed_1564634231340.png',
            name: 'Denis Abdullin',
            message: 'Good job!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/31416748_2172361649445858_199732270074953728_n_1537449019782.jpg',
            name: 'Suresh K P',
            message: 'Superb!!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/untitled-1_1539440029279.jpg',
            name: 'CDI Brand Studio',
            message: 'Awesome',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/moshed-2018-9-2-11-54-56_1537235137802.jpg',
            name: 'Gering M',
            message: 'think uuu~~',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/photo_2018-09-20_12-55-41_1540381335850.jpg',
            name: 'Siavashm',
            message: 'so clean design!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/artboard_%E2%80%93_1_1588557993508.png',
            name: 'Nguyen Anh',
            message: 'Awesome!! thanks very much',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/efbi_1543916494544.jpg',
            name: 'Anggi',
            message: 'Ahh, May Zing ...',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/artboard_%E2%80%93_1_1588557993508.png',
            name: 'ericson fabro',
            message: 'wowwwww!!!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/vicky_1598420367930.jpg',
            name: 'reesep17',
            message: 'Can I use this template for a commercial project?',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/res/robot/image/upload/thswb3xtl9t6xsr0yluk/1443685618.png',
            name: 'UI8',
            message: '@reesep17 Yes, you can use it for both personal and commercial projects 🙂',
            created_at: 'Updated over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/res/robot/image/upload/egsmhb3anyl0zhoaborw/1500381932.jpg',
            name: 'Premiumuikits',
            message: 'Thank you so much guys!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/vicky_1598420367930.jpg',
            name: 'reesep17',
            message: '@UI8 Great! Thank you! love it!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/furkan_illustrasyon_1562176867339.png',
            name: 'anas kalla',
            message: 'thanks so much.',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/furkan_illustrasyon_1562176867339.png',
            name: 'furkeyn',
            message: 'Sketch version Please!',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/artboard_%E2%80%93_1_1588557993508.png',
            name: 'Maddi',
            message: 'Thanks, it helped me tons for improving design, gave me tons of ideas',
            created_at: 'over a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/vicky_1598420367930.jpg',
            name: 'Sheth Utsav',
            message: 'Very helpful for me. Thank you for creating and sharing',
            created_at: 'a year ago'
        },
        {
            avatar: 'https://images.ui8.net/uploads/furkan_illustrasyon_1562176867339.png',
            name: 'karo',
            message: 'thanks',
            created_at: 'a year ago'
        },
    ]
    return (
        <div className={styles.panes}>
            <div className={`${styles.pane} ${styles.paneImages}`}>
                <ul className={styles.images}>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb7} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb8} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb9} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb10} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb11} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb12} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb13} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.image}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageDisplay}>
                                <img src={thumb14} alt="anh" className={styles.thumbnail} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={`${styles.pane} ${styles.paneDetails}`}>
                <div className={styles.content}>
                    <div className={`${styles.block} ${styles.overview}`}>
                        <h3 className={styles.title}>Overview</h3>
                        <p className={styles.desc}>
                            Another fun and free product from the team here at UI8.
                            Included in this awesome collection of responsive screens are 3
                            Large Desktop screens, 3 Desktop screens, 1 Desktop Overlay, 3 Tablet screens,
                            3 Mobile screens and 1 Mobile Overlay screen template. Repeat grids allow for ease
                            of use, and the ability to resize groups of objects for different size screens.
                            This kit is easily customizable and designed specifically to be used in Adobe XD
                            to speed up your workflow.
                        </p>
                    </div>
                    <div className={`${styles.block} ${styles.features}`}>
                        <h4 className={styles.title}>Highlights</h4>
                        <ul className={styles.hightlights}>
                            <li className={styles.feature}>
                                <div className={styles.wrapper}>
                                    <HiCheck className={styles.icon} />
                                    14 Screens & 164+ components
                                </div>
                            </li>
                            <li className={styles.feature}>
                                <div className={styles.wrapper}>
                                    <HiCheck className={styles.icon} />
                                    Responsive Design
                                </div>
                            </li>
                            <li className={styles.feature}>
                                <div className={styles.wrapper}>
                                    <HiCheck className={styles.icon} />
                                    Prototype Included
                                </div>
                            </li>
                            <li className={styles.feature}>
                                <div className={styles.wrapper}>
                                    <HiCheck className={styles.icon} />
                                    Layout Grids & Repeat Grids
                                </div>
                            </li>
                            <li className={styles.feature}>
                                <div className={styles.wrapper}>
                                    <HiCheck className={styles.icon} />
                                    Easy to use & Customizable
                                </div>
                            </li>
                            <li className={styles.feature}>
                                <div className={styles.wrapper}>
                                    <HiCheck className={styles.icon} />
                                    Compatible with Adobe XD
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.block} ${styles.metrics}`}>
                        <h4 className={styles.title}>Compatibility</h4>
                        <div className={styles.wrap}>
                            <span className={styles.appicons}>
                                <SiAdobexd className={styles.icon} />
                            </span>
                            <span className={styles.metric}>
                                <BsDownload className={styles.icon} />
                                <span>43.0 MB in 1 File</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.pane} ${styles.paneComments}`}>
                <div className={styles.discuss}>
                    <div className={styles.wrapper}>
                        <div className={`${styles.loggedIn} ${styles.noComments}`}>
                            <span className={styles.comment}>31 Comments</span>
                            <div className={styles.sorting}>
                                <ol className={styles.options}>
                                    <li className={`${styles.option} ${styles.selected}`}>Newest</li>
                                    <li className={`${styles.option}`}>Oldest</li>
                                </ol>
                            </div>
                        </div>
                        <ul className={styles.list}>
                            {data.map(comment => (
                                <Comments
                                    avatar={comment.avatar}
                                    name={comment.name}
                                    message={comment.message}
                                    created_at={comment.created_at}
                                />
                            ))}
                        </ul>
                        <PostComment />
                    </div>
                </div>
            </div>
            <Product
                desc="See more products from UI8 "
            />
        </div>
    );
}

export default Panes;