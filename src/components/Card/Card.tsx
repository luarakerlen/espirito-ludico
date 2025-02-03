import styles from './Card.module.css';

interface CardProps {
	title: string;
	description: string;
	Image: React.ElementType;
	backgroundColor: string;
}

export const Card = ({
	title,
	description,
	Image,
	backgroundColor,
}: CardProps) => {
	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<div className={styles.imageContainer}>
				<Image className={styles.image} />
			</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</div>
	);
};
