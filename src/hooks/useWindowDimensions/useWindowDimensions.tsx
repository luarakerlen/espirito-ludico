import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		windowWidth: windowDimensions.width,
		windowHeight: windowDimensions.height,
	};
};
