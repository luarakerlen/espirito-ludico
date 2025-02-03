import styles from './Think.module.css';
import gamesImg from '../../assets/games.jpg';
import { Button } from '../Button';
import { Title } from '../Title';

export const Think = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Title >Já pensou em alugar jogos de tabuleiro?</Title>
				<p className={styles.subtext}>
					Desperte o espírito lúdico em você e crie conexões autênticas e
					momentos inesquecíveis com quem você ama. Tudo isso do conforto da sua
					casa.
				</p>
				<Button>Saiba mais</Button>
			</div>
			<img className={styles.image} src={gamesImg.src} alt='' />
		</div>
	);
};
