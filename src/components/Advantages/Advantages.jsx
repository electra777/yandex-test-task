import React from 'react';
import styles from './Advantages.module.css';
import mock from '../../mock';

const Advantages = () => {
	return (
		<div className={styles.root}>
			<h2 className={styles.title}>
				Вот что даёт участие <br /> в клубе
			</h2>
			<div className={styles.box}>
				{mock.advantages.map((item) => {
					return (
						<div className={styles.item} key={item.id}>
							<img src={item.img} className={styles.image} alt="icon" />
							<div className={styles.text}>{item.text}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Advantages;
