import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server:{
		port:3000,
		strictPort:false,
	},
	preview:{
		port:3000,
		strictPort:false,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
