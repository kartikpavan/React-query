import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../utils/fetchPosts";
import Card from "../components/Card";
import Loader from "../components/Loader";
import NewPost from "../components/NewPost";
const Home = () => {
	const [page, setPage] = useState(1);

	const { data, isLoading, isError, error } = useQuery(["posts", page], () => fetchPosts(page), {
		keepPreviousData: true,
	});

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
			<NewPost />
			<div className="flex justify-between items-center">
				<button
					className="btn btn-error"
					onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
					disabled={page === 1}
				>
					PREV
				</button>
				<h1>Current Page : {page}</h1>
				<button className="btn btn-success" onClick={() => setPage((prev) => prev + 1)}>
					NEXT
				</button>
			</div>
			{data.length !== 0 ? (
				data?.map((post) => {
					return <Card post={post} key={post.id} />;
				})
			) : (
				<h1 className="text-2xl font-medium h-24 flex items-center justify-center">
					No Posts found
				</h1>
			)}
		</div>
	);
};

export default Home;
