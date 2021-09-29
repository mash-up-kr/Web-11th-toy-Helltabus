import customAxios from './customAxios';

const realWorldAPI = {
	getListArticles: async () => {
		return await customAxios.get('articles');
	},
	getProfile: async ({ username }: { username: string }) => {
		const res = await customAxios.get(`/profiles/${username}`);
		return res.data;
	},
	getArticle: async ({ slug }: { slug: string }) => {
		const res = await customAxios.get(`/articles/${slug}`);
		return res.data;
	},
};

export default realWorldAPI;
