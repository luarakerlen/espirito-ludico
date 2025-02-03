import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	children: React.ReactNode;
}

export const Button = ({
	children,
	...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button className={styles.container} {...rest}>
			{children}
		</button>
	);
};
