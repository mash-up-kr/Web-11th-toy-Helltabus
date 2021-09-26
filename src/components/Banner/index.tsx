import React from 'react';

function Banner() {
	return (
		<div className="banner">
			<div className="container">
				<h1>How to build webapps that scale</h1>

				<div className="article-meta">
					{/* TODO: 글쓴이의 아이디로 접근하게 변경 */}
					<a href="/profile:">
						<img src="http://i.imgur.com/Qr71crq.jpg" alt="" />
					</a>
					<div className="info">
						{/* TODO: 글쓴이의 아이디로 접근하게 변경 */}
						<a href="/profile:" className="author">
							Eric Simons
						</a>
						<span className="date">January 20th</span>
					</div>
					<button className="btn btn-sm btn-outline-secondary">
						<i className="ion-plus-round"></i>
						&nbsp; Follow Eric Simons <span className="counter">(10)</span>
					</button>
					&nbsp;&nbsp;
					<button className="btn btn-sm btn-outline-primary">
						<i className="ion-heart"></i>
						&nbsp; Favorite Post <span className="counter">(29)</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Banner;
