import logo_side_pink from '../../assets/logo_side_full_transparent_pink.svg';
import logo_bottom_pink from '../../assets/logo_bottom_full_transparent_pink.svg';
import styles from './Header.module.css';
import { useWindowDimensions } from '../../hooks';

export const Header = () => {
	const { windowWidth } = useWindowDimensions();
	return (
		<div className={styles.container}>
			<img
				className={styles.logo}
				src={windowWidth > 480 ? logo_side_pink.src : logo_bottom_pink.src}
				alt='Meeple rosa com a escrita Espírito Lúdico e o slogan Joga e conecta'
			/>
			<div className={styles.welcomeContainer}>
				<p className={styles.welcomeSubtext}>
					&quot;Joga como se a diversão dependesse de você, conecta como se a
					magia do momento dependesse de todos.&quot;
				</p>
			</div>
			{windowWidth <= 880 && (
				<button className={styles.wannaPlayBtn}>Quero jogar</button>
			)}
		</div>
	);
};
