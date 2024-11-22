import { Platform } from '$lib/types';
import { getSkills } from './skills';
import Assets from './assets';
export const title = 'Home';

export const name = 'Yassine';

export const lastName = 'Bousseha';

export const description =
	'I am a compassionate person who values individuals who want to learn and offer advice, and I am always willing to engage in meaningful talks. I specialise in turning company concepts into web and mobile applications, with an emphasis on using new AI technology. My ability to write efficient, quality code ensures that value is added at every step of software development.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/yass002' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/yassinebousseha/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.Email,
		link: 'yassinebousseha@gmail.com'
	},
	
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');

export const me = Assets.Me;
