import React from 'react';
import styles from './Comments.module.scss'

function Comments({
    avatar = '',
    name = '',
    message = '',
    created_at = null,
}) {
    const styling = {
        background: `url(${avatar})`,
        backgroundSize: 'contain',
        width: '48px',
        height: '48px',
        borderRadius: '4px',
    }
    return (
        <li className={styles.item}>
            <div className={`${styles.thumb}`} style={styling}></div>
            <div className={styles.content}>
                <span className={styles.name}>
                    <a href="#name">{name}</a>
                </span>
                <p className={styles.msg}>{message}</p>
                <div className={styles.meta}>
                    <span className={styles.createdAt}>{created_at}</span>
                </div>
            </div>
        </li>
    );
}

export default Comments;