import styles from './Title.module.css';

interface TitleProps {
	children: React.ReactNode;
	titleColor?: string;
	lineColor?: string;
}

export const Title = ({ children, titleColor, lineColor }: TitleProps) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title} style={{ color: titleColor }}>
				{children}
			</h3>
			<div className={styles.line} style={{ backgroundColor: lineColor }}></div>
		</div>
	);
};
