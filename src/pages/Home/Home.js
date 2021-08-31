import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { getApiToken , getAllCards } from '../../redux/cardSlice';
import logo from '../../assets/imgs/Logo.png';
import styles from './Home.module.scss';
import '../../defoltStyles/resetStyles.css';
import CustomForm from '../../components/CustomForm/CustomForm';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomCardHeader from '../../components/CustomCardHeader/CustomCardHeader';

const Home = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(5);
    const [switchValue, setSwitchValue] = useState('');
    const [cards, setCards] = useState([]);
    const [checkedCards, setCheckedCards] = useState([]);
    
    useEffect(() => {
        dispatch(getApiToken());
        dispatch(getAllCards()).then(r => setCards(r.payload));
    }, [dispatch])

    useEffect(() => {
        switch (switchValue) {
            case 'sortByPrice':
                return setCheckedCards(checkedCards.slice().sort((ticket, nextTicket) => ticket.price - nextTicket.price));
            case 'sortByTime':
                return setCheckedCards(checkedCards.slice().sort((ticket, nextTicket) => ticket.segments[0].duration - nextTicket.segments[0].duration));
            case 'sortOptimal':
                return setCheckedCards(checkedCards.slice().sort((ticket, nextTicket) => (ticket.price / nextTicket.price + ticket.segments[0].duration / nextTicket.segments[0].duration) / 2 - 1));
            default:
                break;
        }
    }, [switchValue]);

    const renderedCards = checkedCards.slice(0, `${count}`).map(card => {
        const durationInHours = `${(card.segments[0].duration / 60).toFixed(2).slice(0, 2)}ч ${(card.segments[0].duration / 60).toFixed(2).slice(3)}м`;
        const backwardDurationInHours = `${(card.segments[1].duration / 60).toFixed(2).slice(0, 2)}ч ${(card.segments[1].duration / 60).toFixed(2).slice(3)}м`;
        const arrivalTime = new Date(new Date(card.segments[0].date).getTime() + card.segments[0].duration * 60000).toISOString().slice(11, 16);
        const backwardArrivalTime = new Date(new Date(card.segments[1].date).getTime() + card.segments[0].duration * 60000).toISOString().slice(11, 16);
        return (
            <div className={styles.card__wrapper} key={Math.random()}>
                <div className={styles.card}>
                    <div className={styles.card__content}>
                        <CustomCardHeader card={card}/>
                        <CustomCard 
                            card={card} 
                            durationInHours={durationInHours} 
                            backwardDurationInHours={backwardDurationInHours} 
                            arrivalTime={arrivalTime} 
                            backwardArrivalTime={backwardArrivalTime}
                        />
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.header__wrapper}>
                <img className={styles.header__logo} src={logo} alt="Logo" onClick={() => window.location.href = "/"}/>
            </div>
            <div className={styles.content__wrapper}>
                <div className={styles.sortBtn__wrapper}>
                    <CustomButton className={`${switchValue === 'sortByPrice' ? styles.sortBtn_active : null} ${styles.sortBtn}`} text={"САМЫЙ ДЕШЕВЫЙ"} onClick={() => setSwitchValue('sortByPrice')}/>
                    <CustomButton className={`${switchValue === 'sortByTime' ? styles.sortBtn_active : null} ${styles.sortBtn}`}  text={"САМЫЙ БЫСТРЫЙ"} onClick={()  => setSwitchValue('sortByTime')}/>
                    <CustomButton className={`${switchValue === 'sortOptimal' ? styles.sortBtn_active : null} ${styles.sortBtn}`} text={"ОПТИМАЛЬНЫЙ"} onClick={()  => setSwitchValue('sortOptimal')}/>
                </div>
            <CustomForm cards={cards} checkedCards={checkedCards} setCheckedCards={setCheckedCards}/>
            </div>
            {renderedCards}
            {checkedCards.length > count ? <CustomButton  text={"ПОКАЗАТЬ ЕЩЕ 5 РЕЗУЛЬТАТОВ"} onClick={() => setCount(count + 5)}/> : null } 
        </div>
    );
}

export default Home;