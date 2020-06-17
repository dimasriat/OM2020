const cabang = ((...arrs) => {
	const To = (text) => text.split(" ").join("-");
	const Label = (text) =>
		text
			.split(" ")
			.map(
				(word) =>
					(word = word.slice(0, 1).toUpperCase() + word.slice(1))
			)
			.join(" ");
	return arrs.map((item) => ({
		to: To(item),
		label: Label(item),
		position: "left",
	}));
})(
	"olahraga",
	"penalaran dan keilmiahan",
	"duta kampus",
	"seni budaya",
	"komunitas daerah"
);

module.exports = {
	title: "OLIMPUS 2020",
	tagline: `Let's the medieval begin!`,
	url: "https://olimpus2020.com",
	baseUrl: "/",
	favicon: "img/favicon.ico",
	organizationName: "dimasriat", // Usually your GitHub org/user name.
	projectName: "om2020", // Usually your repo name.
	themeConfig: {
		defaultDarkMode: true,
		navbar: {
			title: "OM2020",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			links: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{ to: "blog", label: "Blog", position: "left" },
				{
					href: "https://github.com/facebook/docusaurus",
					label: "GitHub",
					position: "right",
				},
				// ...cabang
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Style Guide",
							to: "docs/",
						},
						{
							label: "Second Doc",
							to: "docs/doc2/",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href:
								"https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "Twitter",
							href: "https://twitter.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/facebook/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					// It is recommended to set document id as docs home page (`docs/` path).
					homePageId: "doc1",
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
