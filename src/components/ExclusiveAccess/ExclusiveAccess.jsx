import React from 'react';
import styles from './ExclusiveAccess.module.css';
import Htag from '../Htag/Htag';

const ExclusiveAccess = () => {
	return (
		<div className={styles.root}>
			<Htag tag="h3">
				Эксклюзивный доступ <br /> к событиям Самокатов
			</Htag>
		</div>
	);
};

export default ExclusiveAccess;
