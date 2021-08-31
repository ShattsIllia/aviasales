import React from 'react';
import styles from './CustomCardHeader.module.scss'

const CustomCardHeader = ({card}) => {
    return (
        <div className={styles.card__header}>
            <div className={styles.card__price}>{card.price} Р</div>
            <div className={styles.card__logo}><img className={styles.card__logo} src={`https://pics.avs.io/99/36/${card.carrier}.png`} alt="Logo"/></div>
        </div>
    );

}

export default CustomCardHeader;