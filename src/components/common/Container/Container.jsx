import React from 'react';
import Panes from '../../Panes/Panes';
import Publish from '../../Publish/Publish';
import styles from './Container.module.scss'

function Container() {
    return (
        <div className={styles.container}>
            <Publish></Publish>
            <Panes></Panes>
        </div>
    );
}

export default Container;