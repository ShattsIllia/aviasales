import React from 'react';
import styles from './CustomCard.module.scss'

const CustomCard = ({card, durationInHours, backwardDurationInHours, arrivalTime, backwardArrivalTime}) => {
    return (
        <div>
            <div className={styles.card__flight__wrapper}>
                <div className={styles.card__flight__content}>
                    <div className={styles.card__flight__title}>{card.segments[0].origin} – {card.segments[0].destination}</div>
                    <div className={styles.card__flight__description}>{`${card.segments[0].date.slice(11, 16)} – ${arrivalTime}`}</div>
                </div>
                <div className={styles.card__flight__content}>
                    <div className={styles.card__flight__title}>В пути</div>
                    <div className={styles.card__flight__description}>{durationInHours}</div>
                </div>
                <div className={styles.card__flight__content}>
                    <div className={styles.card__flight__title}>{card.segments[0].stops.length ? `${card.segments[0].stops.length} пересадки` : "Прямой Рейс"}</div>
                    <div className={styles.card__flight__description}>{card.segments[0].stops.map(stop => {
                        return `${stop} `;
                    })}</div>
                </div>
            </div>
            <div className={styles.card__flight__wrapper}>
                <div className={styles.card__flight__content}>
                    <div className={styles.card__flight__title}>{card.segments[1].origin} – {card.segments[1].destination}</div>
                    <div className={styles.card__flight__description}>{`${card.segments[1].date.slice(11, 16)} – ${backwardArrivalTime}`}</div>
                </div>
                <div className={styles.card__flight__content}>
                    <div className={styles.card__flight__title}>В пути</div>
                    <div className={styles.card__flight__description}>{backwardDurationInHours}</div>
                </div>
                <div className={styles.card__flight__content}>
                    <div className={styles.card__flight__title}>{card.segments[1].stops.length ? `${card.segments[1].stops.length} пересадки` : "Прямой Рейс"}</div>
                    <div className={styles.card__flight__description}>{card.segments[1].stops.map(stop => {
                        return `${stop} `;
                    })}</div>
                </div>
            </div>
        </div>
    );
}

export default CustomCard;