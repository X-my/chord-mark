/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docs: [
		{
			type: 'doc',
			id: 'getting-started',
			label: 'Getting started',
		},
		{
			type: 'category',
			label: 'Reference',
			items: [
				'reference/chords',
				'reference/lyrics',
				'reference/sections',
				'reference/keys',
			],
		},
	],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
