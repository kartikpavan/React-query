import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSinglePost } from "../utils/fetchSinglePost";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import Card from "../components/Card";

const Post = () => {
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
			<Card post={data} />
			<Link to="/" className="link ">
				Back to Home page
			</Link>
		</div>
	);
};

export default Post;
