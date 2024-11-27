
/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'ChordMark',
	noIndex: true,
	tagline: 'Chord charts. Reinvented!',
	url: 'https://chord-mark-docs.netlify.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	projectName: 'chord-mark', // Usually your repo name.

	plugins: ['docusaurus-plugin-sass'],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/',
					// Please change this to your repo.
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
				gtag: {
					trackingID: 'G-Z2C35ZZBCN',
					anonymizeIP: true,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'ChordMark',
				// logo: {
				// 	alt: 'ChordMark Logo',
				// 	src: 'img/icon_whitebg.png',
				// },
			},
			colorMode: {
				disableSwitch: true,
				respectPrefersColorScheme: true,
			  },
		}),
	i18n:
	/** @type {import('@docusaurus/types').I18nConfig} */
	({
		defaultLocale: 'en',
		locales: ['en', 'zh-Hans', 'zh-Hant']
	}),
};

module.exports = config;
