import customAxios from './customAxios';

const realWorldAPI = {
	getListArticles: async () => {
		return await customAxios.get('articles');
	},
	getProfile: async ({ username }: { username: string }) => {
		return await customAxios.get(`/profiles:${username}`);
	},
};

export default realWorldAPI;
