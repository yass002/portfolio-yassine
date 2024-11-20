import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Degree in Computer Science and Multimedia',
		description: '',
		location: 'Tunisia',
		logo: Assets.iTeam,
		name: '',
		organization: 'iTeam university',
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 5, 1) },
		shortDescription: 'I participated in an application-based selection process for Admission to Engineering Program and I was awarded a full scholarship to study Software Engineering',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English','','','','']
	},
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
