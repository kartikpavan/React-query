import React from "react";
import { Link } from "react-router-dom";
const Card = ({ post }) => {
	return (
		<Link
			to={`/post/${post.id}`}
			className="card w-full bg-primary-content text-secondary-content my-3 shadow-xl hover:bg-secondary hover:text-neutral duration-300"
		>
			<div className="card-body">
				<div className="flex justify-between ">
					<h1>userID: {post.user_id}</h1>
					<h1>postID: {post.id}</h1>
				</div>
				<h1 className="card-title">{post.title}</h1>
				<p>{post.body}</p>
			</div>
		</Link>
	);
};

export default Card;
