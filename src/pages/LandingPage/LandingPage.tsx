'use client';
import { useEffect, useState } from 'react';
import { Header, HowDoesItWork, Think, WelcomeScreen } from '../../components';
import styles from './LandingPage.module.css';

export default function LandingPage() {
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
				<HowDoesItWork />
			</div>
		</div>
	);
}
