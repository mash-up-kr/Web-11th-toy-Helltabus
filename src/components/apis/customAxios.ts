import axios from 'axios';

const customAxios = axios.create({
	baseURL: 'https://conduit.productionready.io/api',
	headers: { 'Access-Control-Allow-Headers': 'Content-Type' },
});

export default customAxios;
