import React from 'react';
import styles from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.t}></div>
			<Button />
		</div>
	);
};

export default Header;
