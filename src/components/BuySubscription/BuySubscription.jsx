import React from 'react';
import styles from './BuySubscription.module.css';
import Htag from '../Htag/Htag';
import Button from '../Button/Button';

const BuySubscription = () => {
	return (
		<div className={styles.root}>
			<div className={styles.item}>
				<Htag tag="h3">Купить абонемент и вступить в клуб смогут те, кто в Плюсе</Htag>
				<div className={styles.text}>
					За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно
					тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах
					Яндекса
				</div>
			</div>
			<div className={styles.item}>
				<img src="/img/scooter-plus.png" alt="scooter" />
			</div>
			<div className={styles.item}>
				<img src="/img/scooter-in-round.png" alt="scooter" />
			</div>
			<div className={styles.item}>
				<Htag tag="h3">80% наших пользователей уже в клубе и экономят на поездках</Htag>
				<div className={styles.text}>
					Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона
					предупредим заранее, чтобы вы были готовы
				</div>
				<Button>Хочу абонемент</Button>
			</div>
		</div>
	);
};

export default BuySubscription;
