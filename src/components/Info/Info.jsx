import React from 'react';
import styles from './Info.module.css';

const Info = () => {
	return (
		<div className={styles.root}>
			Доп. опция «Абонемент на самокаты» на 8 месяцев (240 дней) активируется автоматически с
			момента старта сезона 2024 г. самокатов Яндекс Go, далее предусмотрено автопродление доп.опции
			за 399 руб./мес. Сертификат на доп.опцию «Абонемент на самокаты» на 8 месяцев оформляется
			на условиях документа yandex.ru/legal/scooters_seasonpass. Доп.опция доступна пользователям с
			активной подпиской (условия подписки:{' '}
			<a
				href="http://yandex.ru/legal/yandex_plus_conditions"
				target="_blank"
				className={styles.link}>
				yandex.ru/legal/yandex_plus_conditions)
			</a>
			, есть ограничения, подробнее:{' '}
			<a
				href="http://yandex.ru/legal/yandex_plus_opzii_list"
				target="_blank"
				className={styles.link}>
				yandex.ru/legal/yandex_plus_opzii_list
			</a>
			. В случае отсутствия у пользователя активной подписки на дату активации доп.опции,
			пользователю предоставляется 7 дней подписки Яндекс Плюс бесплатно, далее автопродление — 299
			руб./мес. Электросамокаты Яндекс Go — сервис аренды электросамокатов на условиях:{' '}
			<a href="http://clck.ru/gwDGn" target="_blank" className={styles.link}>
				clck.ru/gwDGn
			</a>
			. 0+
		</div>
	);
};

export default Info;
