import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSinglePost } from "../utils/fetchSinglePost";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Post = () => {
	const navigate = useNavigate();
	const { postId } = useParams();

	const { data, isLoading, isError, error } = useQuery(
		["SinglePost", postId],
		() => fetchSinglePost(postId),
		{
			keepPreviousData: true,
		}
	);
	console.log(data);

	if (isLoading)
		return (
			<h1 className="w-full h-screen flex items-center justify-center">
				<Loader />
			</h1>
		);

	if (isError) return <h1>Something went Wrong {error}</h1>;

	console.log(data);
	return (
		<div className="w-11/12 mx-auto">
			SINGLE POST
			<div className="card w-full bg-secondary-content text-primary-content my-3 shadow-xl ">
				<div className="card-body">
					<div className="flex justify-between ">
						<h1>userID: {data.user_id}</h1>
						<h1>postID: {data.id}</h1>
					</div>
					<h1 className="card-title">{data.title}</h1>
					<p>{data.body}</p>
				</div>
			</div>
			<Link to="/" className="link ">
				Back to Home page
			</Link>
		</div>
	);
};

export default Post;
