import React from 'react';
import styles from './ExclusiveAccess.module.css';
import Htag from '../Htag/Htag';
import clsx from 'clsx';

const ExclusiveAccess = () => {
	return (
		<div className={styles.root}>
			<Htag tag="h3">
				Эксклюзивный доступ <br /> к событиям Самокатов
			</Htag>
			<div className={styles.box}>
				<div className={styles.col}>
					<div className={styles.text}>
						С абонементом — у вас доступ к специальным мероприятиям, <br /> скидки и классный мерч.
						В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем
						Мезенцевым и слушали хор Attaque de Panique
					</div>
					<div className={clsx(styles.imageWrapper, styles.imageWrapperMan)}>
						<img src="/img/ExclusiveAccess-2.png" alt="man play music" />
					</div>
					<div className={clsx(styles.imageWrapper)}>
						<img src="/img/ExclusiveAccess-4.png" alt="girl with shopper" />
					</div>
				</div>
				<div className={styles.col}>
					<div className={clsx(styles.imageWrapper, styles.imageWrapperPeople)}>
						<img src="/img/ExclusiveAccess-1.png" alt="dancing people" />
					</div>
					<div className={clsx(styles.imageWrapper, styles.imageWrapperSunGirl)}>
						<img src="/img/ExclusiveAccess-3.png" alt="girl on the sun" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExclusiveAccess;
