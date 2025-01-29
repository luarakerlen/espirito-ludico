import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Espírito Lúdico',
	description: 'Aluguel de jogos de tabuleiro',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Anton&family=Dosis:wght@200..800&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
