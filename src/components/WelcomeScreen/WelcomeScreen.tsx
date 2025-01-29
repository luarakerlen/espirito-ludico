import styles from './WelcomeScreen.module.css';
import logo_blue from '../../assets/logo_bottom_full_transparent_blue.svg';

interface Props {
	isShown: boolean;
}

export const WelcomeScreen = ({ isShown }: Props) => {
	return (
		<div
			className={styles.container}
			style={{
				transform: isShown ? 'translateX(0)' : 'translateX(-100%)',
			}}
		>
			<img
				className={styles.logo}
				src={logo_blue.src}
				alt='Meeple azul com a escrita Espírito Lúdico e o slogan Joga e conecta'
			/>
		</div>
	);
};
