import { Button } from '../Button';
import { Card } from '../Card';
import { Title } from '../Title';
import styles from './HowDoesItWork.module.css';
import { ChooseSvg, HaveFunSvg, PickUpSvg, ReturnSvg } from '../Svg';
import { useWindowDimensions } from '../../hooks';

export const HowDoesItWork = () => {
	const { windowWidth } = useWindowDimensions();

	return (
		<div className={styles.container}>
			<div className={styles.textAndButtonContainer}>
				<div className={styles.textContainer}>
					<p className={styles.text}>
						Os <span className={styles.bold}>jogos de tabuleiro</span> estão
						voltando com <span className={styles.bold}>força total</span>! Com
						partidas{' '}
						<span className={styles.bold}>rápidas e regras fáceis</span>, são
						opções ideais para{' '}
						<span className={styles.bold}>
							adultos, casais e famílias, independente da idade
						</span>
						, jogarem em casa e, mais importante,{' '}
						<span className={styles.bold}>longe das telas</span>!
					</p>
					<p className={styles.text}>
						Se você ainda não conhece{' '}
						<span className={styles.italic}>board games</span>, fale com um de
						nossos especialistas para que possamos te indicar jogos{' '}
						<span className={styles.bold}>
							tão legais quanto Uno, War ou Banco Imobiliário
						</span>
						.
					</p>
				</div>
				<div className={styles.buttonContainer}>
					<Button>Receba sugestões de jogos</Button>
				</div>
			</div>

			<div className={styles.explanation}>
				<Title titleColor='var(--text-blue)' lineColor='var(--text-blue)'>
					Como funciona?
				</Title>

				<div className={styles.cardsContainer}>
					<Card
						title='1. Escolha'
						description='Escolha seus jogos a partir da lista disponível, faça seu cadastro e o pedido.'
						Image={ChooseSvg}
						backgroundColor='var(--background-blue)'
					/>
					<Card
						title='2. Retire/Receba'
						description='Combine por WhatsApp o método de entrega: retirar na loja ou receber em casa.'
						Image={PickUpSvg}
						backgroundColor={'var(--background-pink)'}
					/>
					<Card
						title='3. Divirta-se'
						description='Aproveite cada jogo o quanto quiser.'
						Image={HaveFunSvg}
						backgroundColor={
							windowWidth < 480 || windowWidth > 880
								? 'var(--background-blue)'
								: 'var(--background-pink)'
						}
					/>
					<Card
						title='4. Devolva'
						description='No dia marcado devolva o jogo.'
						Image={ReturnSvg}
						backgroundColor={
							windowWidth < 480 || windowWidth > 880
								? 'var(--background-pink)'
								: 'var(--background-blue)'
						}
					/>
				</div>
			</div>
		</div>
	);
};
