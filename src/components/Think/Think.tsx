import styles from './Think.module.css';
import gamesImg from '../../assets/games.jpg';

export const Think = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.titleContainer}>
					<h3 className={styles.title}>
						Já pensou em alugar jogos de tabuleiro?
					</h3>
					<div className={styles.line}></div>
				</div>
				<p className={styles.subtext}>
					Desperte o espírito lúdico em você e crie conexões autênticas e
					momentos inesquecíveis com quem você ama. Tudo isso do conforto da sua casa.
				</p>
				<button className={styles.button}>Saiba mais</button>
			</div>
			<img className={styles.image} src={gamesImg.src} alt='' />
		</div>
	);
};
