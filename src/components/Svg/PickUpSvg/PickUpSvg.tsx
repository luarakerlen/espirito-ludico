interface ChooseSvgProps {
	color?: string;
	width?: string;
	height?: string;
}

export const PickUpSvg = ({
	color = '#000000',
	width = '100',
	height = '100',
}: ChooseSvgProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			zoomAndPan='magnify'
			viewBox='0 0 375 374.999991'
			height={height}
			preserveAspectRatio='xMidYMid meet'
			version='1.0'
		>
			<path
				fill={color}
				d='M 301.535156 229.050781 C 294.792969 229.050781 288.269531 229.984375 282.0625 231.683594 L 269.828125 198.976562 L 281.960938 192.875 C 289.804688 188.957031 294.859375 180.808594 294.859375 172.105469 C 294.859375 159.503906 284.546875 149.082031 271.765625 148.898438 L 267.09375 148.898438 C 264.339844 141.148438 256.929688 135.5625 248.234375 135.5625 L 248.1875 135.5625 L 208.136719 135.648438 L 208.136719 132.097656 C 208.136719 132.097656 228.628906 115.027344 228.628906 115.027344 C 241.078125 104.65625 244.714844 87.300781 237.472656 72.816406 C 237.4375 72.75 237.390625 72.683594 237.355469 72.617188 C 237.355469 72.597656 237.355469 72.582031 237.339844 72.566406 L 229.046875 57.695312 C 219.335938 40.277344 198.523438 32.140625 179.570312 38.359375 L 173.527344 40.34375 C 172.460938 38.707031 171.140625 37.207031 169.589844 35.925781 L 135.132812 7.035156 C 126.671875 -0.0507812 114.023438 1.050781 106.914062 9.503906 L 72.589844 50.359375 C 65.496094 58.8125 66.597656 71.449219 75.058594 78.550781 L 109.515625 107.441406 C 112.738281 110.140625 116.558594 111.640625 120.464844 112.007812 C 115.890625 121.292969 112.652344 131.347656 111.035156 141.898438 L 110.902344 142.765625 C 109.367188 152.785156 112.519531 162.753906 119.042969 170.054688 C 112.605469 172.355469 107.964844 178.507812 107.964844 185.742188 C 107.964844 194.925781 115.457031 202.410156 124.652344 202.410156 L 137.21875 202.410156 L 144.425781 216.832031 C 143.941406 217.132812 143.492188 217.480469 143.109375 217.914062 L 119.078125 244.121094 C 106.730469 234.703125 91.3125 229.085938 74.605469 229.085938 C 34.125 229.085938 1.183594 261.992188 1.183594 302.433594 C 1.183594 342.875 34.125 375.785156 74.605469 375.785156 C 112.835938 375.785156 144.324219 346.425781 147.714844 309.101562 L 175.898438 309.101562 C 178.652344 316.855469 186.058594 322.4375 194.753906 322.4375 C 205.800781 322.4375 214.777344 313.46875 214.777344 302.433594 C 214.777344 299.949219 214.292969 297.5 213.410156 295.230469 C 215.164062 293.148438 216.496094 290.699219 217.265625 287.980469 L 217.347656 287.695312 L 238.957031 264.140625 C 232.097656 275.292969 228.128906 288.414062 228.128906 302.433594 C 228.128906 342.875 261.066406 375.785156 301.550781 375.785156 C 342.035156 375.785156 374.972656 342.875 374.972656 302.433594 C 374.972656 261.992188 342.035156 229.085938 301.550781 229.085938 Z M 281.511719 172.105469 C 281.511719 175.804688 279.339844 179.273438 275.96875 180.957031 L 258.480469 189.757812 C 255.445312 191.292969 254.042969 194.859375 255.226562 198.042969 L 261.835938 215.714844 L 237.554688 215.714844 C 239.023438 204.828125 235.019531 193.660156 226.675781 186.257812 L 214.726562 175.65625 L 248.269531 175.589844 C 256.945312 175.574219 264.339844 169.988281 267.09375 162.253906 L 271.664062 162.253906 C 277.085938 162.335938 281.511719 166.753906 281.511719 172.121094 Z M 165.46875 229.050781 L 189.949219 229.050781 L 182.207031 262.542969 Z M 194.972656 288.265625 C 194.886719 288.03125 194.820312 287.78125 194.703125 287.546875 L 191.601562 281.347656 C 191.617188 281.230469 191.601562 281.113281 191.632812 280.980469 L 204.832031 223.851562 C 204.832031 223.851562 204.867188 223.714844 204.882812 223.632812 L 205.617188 220.449219 C 207.636719 211.695312 203.515625 202.59375 195.605469 198.34375 L 170.523438 184.859375 C 170.359375 184.742188 170.191406 184.609375 170.007812 184.507812 C 169.808594 184.40625 169.605469 184.339844 169.40625 184.257812 L 134.378906 165.421875 C 126.9375 161.417969 122.800781 153.117188 124.085938 144.765625 L 124.21875 143.898438 C 129.074219 112.308594 150.382812 85.917969 179.234375 73.964844 C 178.015625 74.832031 176.847656 75.785156 175.78125 76.867188 C 170.742188 81.917969 167.988281 88.621094 168.003906 95.738281 L 168.105469 148.015625 C 168.003906 148.632812 168.019531 149.265625 168.105469 149.898438 L 168.105469 155.734375 C 168.121094 161.085938 170.222656 166.101562 174.011719 169.871094 C 177.800781 173.636719 182.804688 175.707031 188.144531 175.707031 L 194.671875 175.707031 C 194.671875 175.707031 217.78125 196.226562 217.78125 196.226562 C 223.503906 201.292969 225.84375 209.328125 223.738281 216.679688 L 222.503906 221 C 222.503906 221 222.503906 221.03125 222.503906 221.050781 L 205.351562 281.011719 L 198.890625 288.03125 C 198.59375 288.363281 198.339844 288.714844 198.109375 289.0625 C 198.109375 289.0625 198.074219 289.0625 198.058594 289.0625 C 196.957031 289.0625 195.90625 288.765625 194.953125 288.265625 Z M 220.101562 104.789062 L 208.105469 114.777344 L 208.105469 102.339844 C 208.070312 98.65625 205.082031 95.6875 201.414062 95.6875 C 197.722656 95.6875 194.738281 98.6875 194.753906 102.371094 L 194.804688 128.328125 C 194.753906 128.8125 194.753906 129.296875 194.804688 129.777344 L 194.804688 142.347656 C 194.835938 144.117188 195.539062 145.816406 196.789062 147.066406 C 198.042969 148.316406 199.742188 149.015625 201.496094 149.015625 L 248.21875 148.917969 C 251.890625 148.917969 254.894531 151.898438 254.894531 155.566406 C 254.894531 159.253906 251.90625 162.234375 248.234375 162.253906 L 199.742188 162.351562 L 181.453125 146.117188 L 181.355469 95.738281 C 181.355469 92.171875 182.722656 88.820312 185.242188 86.300781 C 187.761719 83.785156 191.117188 82.386719 194.671875 82.386719 L 208.070312 82.386719 C 211.757812 82.367188 214.746094 79.382812 214.746094 75.699219 C 214.746094 72.015625 211.757812 69.03125 208.070312 69.03125 L 195.371094 69.03125 C 195.589844 69 195.804688 68.949219 196.023438 68.898438 C 196.121094 68.882812 196.222656 68.847656 196.339844 68.832031 L 201.179688 67.613281 C 210.339844 65.332031 219.667969 69.183594 224.539062 77.066406 L 225.542969 78.867188 C 229.964844 87.769531 227.726562 98.421875 220.066406 104.804688 Z M 183.742188 51.027344 C 191.75 48.394531 200.242188 49.542969 207.117188 53.628906 C 204.097656 53.578125 201.027344 53.910156 197.957031 54.679688 L 193.269531 55.84375 C 186.460938 57.210938 179.902344 59.261719 173.660156 61.878906 C 175.296875 59.28125 176.332031 56.378906 176.648438 53.34375 Z M 83.652344 68.316406 C 80.832031 65.949219 80.464844 61.730469 82.835938 58.914062 L 104.292969 33.375 L 129.859375 54.8125 C 131.109375 55.863281 132.628906 56.378906 134.148438 56.378906 C 136.050781 56.378906 137.933594 55.5625 139.269531 53.996094 C 141.640625 51.179688 141.273438 46.960938 138.453125 44.59375 L 112.886719 23.15625 L 117.175781 18.054688 C 119.546875 15.238281 123.765625 14.871094 126.585938 17.238281 L 161.046875 46.125 C 162.414062 47.277344 163.25 48.878906 163.398438 50.660156 C 163.550781 52.445312 163.015625 54.160156 161.863281 55.527344 L 127.539062 96.386719 C 125.167969 99.207031 120.945312 99.570312 118.128906 97.203125 L 83.667969 68.316406 Z M 121.3125 185.707031 C 121.3125 183.925781 122.867188 182.375 124.652344 182.375 L 137.75 182.375 L 150.148438 189.042969 L 124.652344 189.042969 C 122.867188 189.042969 121.3125 187.492188 121.3125 185.707031 Z M 158.027344 202.378906 C 161.796875 202.378906 165.386719 201.078125 168.289062 198.792969 L 189.28125 210.078125 C 191.398438 211.214844 192.667969 213.378906 192.769531 215.699219 L 158.808594 215.699219 L 152.152344 202.363281 L 158.042969 202.363281 Z M 150.683594 229.335938 L 178.21875 284.429688 C 178.382812 286.195312 178.816406 287.914062 179.453125 289.5625 C 177.917969 291.382812 176.714844 293.464844 175.914062 295.714844 L 147.695312 295.714844 C 146.210938 279.378906 139.371094 264.558594 128.90625 253.074219 L 150.699219 229.316406 Z M 93.445312 295.730469 C 93.113281 294.796875 92.730469 293.882812 92.261719 293.03125 L 119.828125 262.992188 C 127.671875 271.960938 132.894531 283.28125 134.28125 295.75 L 93.445312 295.75 Z M 81.265625 302.398438 C 81.265625 306.085938 78.277344 309.070312 74.589844 309.070312 C 70.902344 309.070312 67.914062 306.085938 67.914062 302.398438 C 67.914062 298.714844 70.902344 295.730469 74.589844 295.730469 C 78.277344 295.730469 81.265625 298.714844 81.265625 302.398438 Z M 74.589844 362.414062 C 41.46875 362.414062 14.515625 335.492188 14.515625 302.398438 C 14.515625 269.308594 41.46875 242.386719 74.589844 242.386719 C 87.824219 242.386719 100.054688 246.6875 110 253.957031 L 82.449219 283.996094 C 80.03125 282.960938 77.378906 282.394531 74.605469 282.394531 C 63.558594 282.394531 54.582031 291.363281 54.582031 302.398438 C 54.582031 313.4375 63.558594 322.40625 74.605469 322.40625 C 83.300781 322.40625 90.710938 316.820312 93.464844 309.070312 L 134.296875 309.070312 C 130.960938 339.023438 105.476562 362.414062 74.605469 362.414062 Z M 194.738281 309.070312 C 191.050781 309.070312 188.0625 306.085938 188.0625 302.398438 C 188.0625 301.535156 188.230469 300.714844 188.53125 299.949219 C 191.417969 301.515625 194.671875 302.398438 198.074219 302.398438 C 199.191406 302.398438 200.3125 302.300781 201.378906 302.117188 C 201.378906 302.21875 201.414062 302.300781 201.414062 302.398438 C 201.414062 306.085938 198.425781 309.070312 194.738281 309.070312 Z M 234.101562 229.050781 L 252.992188 229.050781 L 225.523438 259.007812 L 234.085938 229.050781 Z M 268.058594 232.351562 L 269.5625 236.367188 C 265.421875 238.371094 261.519531 240.753906 257.863281 243.46875 Z M 301.535156 362.414062 C 268.410156 362.414062 241.460938 335.492188 241.460938 302.398438 C 241.460938 279.113281 254.828125 258.890625 274.285156 248.9375 L 288.652344 287.113281 C 284.296875 290.78125 281.511719 296.265625 281.511719 302.398438 C 281.511719 313.4375 290.488281 322.40625 301.535156 322.40625 C 312.582031 322.40625 321.558594 313.4375 321.558594 302.398438 C 321.558594 291.363281 312.582031 282.394531 301.535156 282.394531 C 301.402344 282.394531 301.265625 282.414062 301.132812 282.414062 L 286.765625 244.222656 C 291.488281 243.019531 296.445312 242.386719 301.535156 242.386719 C 334.65625 242.386719 361.609375 269.308594 361.609375 302.398438 C 361.609375 335.492188 334.65625 362.414062 301.535156 362.414062 Z M 299.214844 296.230469 C 299.347656 296.183594 299.449219 296.117188 299.582031 296.050781 C 300.199219 295.847656 300.851562 295.714844 301.550781 295.714844 C 305.238281 295.714844 308.226562 298.699219 308.226562 302.382812 C 308.226562 306.066406 305.238281 309.050781 301.550781 309.050781 C 297.863281 309.050781 294.875 306.066406 294.875 302.382812 C 294.875 299.714844 296.460938 297.414062 298.746094 296.347656 C 298.914062 296.300781 299.082031 296.28125 299.230469 296.214844 Z M 299.214844 296.230469 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
			<path
				fill={color}
				d='M 268.160156 82.351562 C 286.566406 82.351562 301.535156 67.398438 301.535156 49.011719 L 301.535156 42.34375 L 314.882812 42.34375 C 318.570312 42.34375 321.558594 39.359375 321.558594 35.675781 C 321.558594 31.992188 318.570312 29.007812 314.882812 29.007812 L 301.535156 29.007812 L 301.535156 22.339844 C 301.535156 11.300781 292.558594 2.332031 281.511719 2.332031 L 268.160156 2.332031 C 249.753906 2.332031 234.785156 17.289062 234.785156 35.675781 L 234.785156 49.011719 C 234.785156 67.398438 249.753906 82.351562 268.160156 82.351562 Z M 268.160156 69.015625 C 257.113281 69.015625 248.136719 60.046875 248.136719 49.011719 L 248.136719 42.34375 L 288.183594 42.34375 L 288.183594 49.011719 C 288.183594 60.046875 279.207031 69.015625 268.160156 69.015625 Z M 268.160156 15.671875 L 281.511719 15.671875 C 285.199219 15.671875 288.183594 18.652344 288.183594 22.339844 L 288.183594 29.007812 L 249.289062 29.007812 C 252.039062 21.238281 259.464844 15.671875 268.160156 15.671875 Z M 268.160156 15.671875 '
				fillOpacity='1'
				fillRule='nonzero'
			/>
		</svg>
	);
};
