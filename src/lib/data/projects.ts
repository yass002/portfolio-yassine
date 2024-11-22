import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Swap Market',
		color: '#5e95e3',
		description:
			'TradeMarket is a modern e-commerce web application designed to facilitate seamless online trading and personalized shopping experiences. The platform integrates advanced user management, robust security features, and real-time recommendation systems to provide a user-friendly and secure trading environment.',
		shortDescription:
			'TradeMarket is a modern e-commerce web application designed to facilitate seamless online trading and personalized shopping experiences. The platform integrates advanced user management, robust security features, and real-time recommendation systems to provide a user-friendly and secure trading environment',
		links: [{ to: 'https://github.com/yass002/ms-trade-market', label: 'GitHub' }],
		logo: Assets.SwapMarket,
		name: 'Swap Market',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'SpringBoot','java','reactjs', 'tailwind'),
		type: 'Micro-service Architecture',
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'The Insurance Workflow Management System is a web-based application designed to streamline and automate the various processes involved in insurance workflow management. The platform enhances operational efficiency, reduces manual effort, and ensures accurate tracking of tasks across different stages of insurance operations.',
		shortDescription:
			'The Insurance Workflow Management System is a web-based application designed to streamline and automate the various processes involved in insurance workflow management. The platform enhances operational efficiency, reduces manual effort, and ensures accurate tracking of tasks across different stages of insurance operations..',
		links: [{ to: 'https://github.com/pfaleithyassine', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Insurance Workflow',
		period: {
			from: new Date()
		},
		skills: getSkills('NestJs', 'ts', 'tailwind', 'reactjs'),
		type: 'Client-Server Architecture',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
