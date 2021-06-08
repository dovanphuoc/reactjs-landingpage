import React from 'react';
import styles from './Label.module.scss'

function Label({
    children = '',
    type = 'green',
}) {
    const classNames = [
        styles[type],
    ]
    return (
        <span className={classNames.join(' ')}>{children}</span>
    );
}

export default Label;