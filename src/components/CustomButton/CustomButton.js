import React from 'react';
import styles from './CustomButton.module.scss';


const CustomButton = ({text, ...props}) => {
    return (
        <div className={styles.pagination__btn__wrapper}>
            <button type="submit" className={styles.pagination__btn} {...props}>{text}</button>
        </div>
    );
};

export default CustomButton