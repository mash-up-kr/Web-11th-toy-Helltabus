import React from 'react';
import { Comment } from '../';

function ArticleComments() {
	return (
		<div className="row">
			<div className="col-xs-12 col-md-8 offset-md-2">
				<form className="card comment-form">
					<div className="card-block">
						<textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
					</div>
					<div className="card-footer">
						<img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="" />
						<button className="btn btn-sm btn-primary">Post Comment</button>
					</div>
				</form>

				<Comment />
				<Comment />
				<Comment />
			</div>
		</div>
	);
}

export default ArticleComments;
