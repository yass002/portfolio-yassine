import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Software Engineering Degree',
		description: '',
		location: 'Tunisia',
		logo: Assets.iTeam,
		name: '',
		organization: 'iTeam university',
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 5, 1) },
		shortDescription: 'I participated in an application-based selection process for Admission to Engineering Program and I was awarded a full scholarship to study Software Engineering',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'J2EE','Spring','Spring Boot','Microservice architecture','Erp :odoo,SAP','Agile scrum','Docker','','Docker','Kubernetes','Git','Jenkins','SonarQube']
	},
	{
		degree: "Bachelor's Degree in Computer Science & Multimedia",
		description: "I completed my bachelor's degree in Computer Science & Multimedia and I graduated with the highest honors after a 4 month end-of-studies internship",
		location: 'Manouba',
		logo: Assets.Unknown,
		name: '',
		organization: 'Higher Institute of Multimedia Arts',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
