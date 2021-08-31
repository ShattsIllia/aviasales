import React, {useState, useEffect} from 'react';
import styles from './CustomForm.module.scss';

const CustomForm = ({cards, setCheckedCards }) => {
    const [amountFlightConnections, setAmountFlightConnections] = useState({
        allFlights: true,
        notAnyStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false
    })
   
    useEffect(()=> {
        const result = [];

        if(amountFlightConnections.allFlights) {
            result.push(...cards); 
        }  
        if(amountFlightConnections.notAnyStops) {
            result.push(...filterByStops(0));
        }
        if(amountFlightConnections.oneStop) {
            result.push(...filterByStops(1));
        } 
        if(amountFlightConnections.twoStops) {
            result.push(...filterByStops(2));
        }
        if(amountFlightConnections.threeStops) {
            result.push(...filterByStops(3));
        }

        setCheckedCards(result);
    }, [amountFlightConnections, cards.length])

    const filterByStops = (stopsCount) => {
        return [...cards.slice().filter((card) => card.segments[0].stops.length === stopsCount && card.segments[1].stops.length === stopsCount)];
    }
    
    return (
        <form className={styles.checkbox__wrapper}>
            <div className={styles.checkbox__title}>
                КОЛИЧЕСТВО ПЕРЕСАДОК
            </div>
            <div className={styles.checkbox__item__wrapper}>
                <input className={styles.checkbox__item} checked={amountFlightConnections.allFlights} type="checkbox" id="allFlights" name="allFlights" onChange={(e) => {
                    setAmountFlightConnections({...amountFlightConnections, allFlights: !amountFlightConnections.allFlights});        
                }}/>          
                <label htmlFor="all">Все</label>
            </div>
            <div className={styles.checkbox__item__wrapper}>
                <input className={styles.checkbox__item} type="checkbox" checked={amountFlightConnections.notAnyStops} id="notAnyStops" name="notAnyStops" onChange={(e) => {
                    setAmountFlightConnections({...amountFlightConnections, notAnyStops: !amountFlightConnections.notAnyStops});        
                }}/>           
                <label htmlFor="notAny">Без пересадок</label>
            </div>
            <div className={styles.checkbox__item__wrapper}>
                <input className={styles.checkbox__item} type="checkbox" checked={amountFlightConnections.oneStop} id="oneStop" name="oneStop" onChange={(e) => {
                    setAmountFlightConnections({...amountFlightConnections, oneStop: !amountFlightConnections.oneStop});     
                }} />             
                <label htmlFor="one">1 пересадка</label>
            </div>
            <div className={styles.checkbox__item__wrapper}>
                <input className={styles.checkbox__item} type="checkbox" checked={amountFlightConnections.twoStops} id="twoStops" name="twoStops" onChange={(e) => {
                    setAmountFlightConnections({...amountFlightConnections, twoStops: !amountFlightConnections.twoStops}); 
                }}/>  
                <label htmlFor="two">2 пересадки</label>
            </div>
            <div  className={styles.checkbox__item__wrapper}>
                <input className={styles.checkbox__item} type="checkbox" checked={amountFlightConnections.threeStops} id="threeStops" name="threeStops" onChange={(e) => {
                    setAmountFlightConnections({...amountFlightConnections, threeStops: !amountFlightConnections.threeStops});
                }}/>      
                <label htmlFor="three">3 пересадки</label>
            </div>
        </form>
    );
};

export default CustomForm;