import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Banner, ArticleContent, ArticleAuthor, ArticleComments } from '../../components';
import realWorldAPI from '../../components/apis/realworldAPI';

function Article() {
	const { slug } = useParams<{ slug: string }>();

	const { isLoading, isError, error, data } = useQuery(['article', slug], () => realWorldAPI.getArticle({ slug }));

	return (
		<div className="article-page">
			<Banner />

			<div className="container page">
				<ArticleContent />

				<hr />

				<ArticleAuthor />

				<ArticleComments />
			</div>
		</div>
	);
}

export default Article;
