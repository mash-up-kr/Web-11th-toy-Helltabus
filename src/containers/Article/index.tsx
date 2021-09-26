import React from 'react';
import { Banner, ArticleContent, ArticleAuthor, ArticleComments } from '../../components';

function Article() {
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
