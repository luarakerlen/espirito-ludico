'use client';
import { useEffect, useState } from 'react';
import { Header, Think, WelcomeScreen } from '../../components';
import logo_side_pink from '../../assets/logo_side_full_transparent_pink.svg';
import logo_bottom_pink from '../../assets/logo_bottom_full_transparent_pink.svg';
import styles from './LandingPage.module.css';
import { useWindowDimensions } from '../../hooks';

export const LandingPage = () => {
	const { windowWidth } = useWindowDimensions();
	const [isShowWelcomeScreen, setIsShowWelcomeScreen] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsShowWelcomeScreen(false);
		}, 2000);
	}, []);

	return (
		<div>
			<WelcomeScreen isShown={isShowWelcomeScreen} />
			<div className={styles.content}>
				<Header />
				<Think />
			</div>
		</div>
	);
};
