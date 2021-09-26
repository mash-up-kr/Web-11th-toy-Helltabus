import React from 'react';

function Comment() {
	return (
		<div className="card">
			<div className="card-block">
				<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
			</div>
			<div className="card-footer">
				{/* TODO: 댓글 글쓴이의 아이디로 접근하게 변경 */}
				<a href="/profile:" className="comment-author">
					<img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="" />
				</a>
				&nbsp;
				{/* TODO: 댓글 글쓴이의 아이디로 접근하게 변경 */}
				<a href="/profile:" className="comment-author">
					Jacob Schmidt
				</a>
				<span className="date-posted">Dec 29th</span>
			</div>
		</div>
	);
}

export default Comment;
