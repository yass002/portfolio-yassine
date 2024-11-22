import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'wd',
		company: 'Ministry of Social affairs',
		description: 'Development of a user-friendly interface allowing advanced filtering and real-time visualization of data in the form of graphs (bar charts, line charts, pie charts).',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("2024-07-15"), to: new Date("2024-08-15") },
		skills: getSkills('html','css','js','reactjs','SpringBoot','PostgreSQL'),
		name: 'Web developer',
		color: 'red',
		links: [],
		logo: Assets.Min,
		shortDescription: 'Development of a user-friendly interface allowing advanced filtering and real-time visualization of data in the form of graphs (bar charts, line charts, pie charts).'
	},
	{
		slug: 'wb',
		company: 'SGSM',
		description: 'My project focuses on developing a web application for managing and tracking elevator maintenance processes. The system is designed to streamline maintenance workflows, monitor the status of elevators, and ensure that preventive maintenance is conducted on time. It provides real-time tracking of maintenance activities, allows technicians to log tasks, and helps managers oversee the progress of ongoing repairs. The application also integrates features for scheduling, reporting, and notifying stakeholders about maintenance requirements or delays.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("2023-06-15"), to: new Date("2023-07-15") },
		skills: getSkills('html', 'css', 'ts', 'SpringBoot', 'Angular', 'PostgreSQL'),
		name: 'Web developer',
		color: 'blue',
		links: [],
		logo: Assets.Sgsm,
		shortDescription: 'My project focuses on developing a web application for managing and tracking elevator maintenance processes. The system is designed to streamline maintenance workflows, monitor the status of elevators, and ensure that preventive maintenance is conducted on time. It provides real-time tracking of maintenance activities, allows technicians to log tasks, and helps managers oversee the progress of ongoing repairs. The application also integrates features for scheduling, reporting, and notifying stakeholders about maintenance requirements or delays..'
	},
	{
		slug: 'Wb',
		company: 'The National Center of Informatics',
		description: 'Development of a system designed to streamline and simplify the management of employees and structures, ensuring efficient and seamless administrative processes',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 1, 1), to: new Date(2021,5,1) },
		skills: getSkills('css', 'html', 'ts', 'SpringBoot', 'Angular', 'PostgreSQL'),
		name: 'Web developer',
		color: 'green',
		links: [],
		logo: Assets.Cni,
		shortDescription: 'Development of a system designed to streamline and simplify the management of employees and structures, ensuring efficient and seamless administrative processes'
	}
];

export const title = 'Experience';
