import styles from './Card.module.css';

interface CardProps {
	title: string;
	description: string;
	color: string;
	Image: React.ElementType;
}

export const Card = ({ title, description, Image, color }: CardProps) => {
	return (
		<div className={styles.container} style={{ backgroundColor: color }}>
			<div className={styles.imageContainer}>
				<Image className={styles.image} color={color} width={80} height={80} />
			</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</div>
	);
};
