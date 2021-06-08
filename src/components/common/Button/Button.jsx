import React from 'react';
import styles from './Button.module.scss'

function Button({
    children = null,
    size = 'm',
    type = 'primary',
    floatRight,
    marginTop,
}) {
    const classNames = [
        styles.button,
        styles[size],
        styles[type],
        floatRight ? styles.floatRight : '',
        marginTop ? styles.marginTop : '',
    ]
    return (
        <button className={classNames.join(' ')}>{children}</button>
    );
}

export default Button;