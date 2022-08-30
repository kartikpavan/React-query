import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "../utils/fetchPosts";
import { useParams, useNavigate } from "react-router-dom";
const Home = () => {
	const { id } = useParams();
	const pageId = parseInt(id);
	const [page, setPage] = useState(pageId);

	const { data, isLoading, isError, error } = useQuery(["posts", page], () => fetchPosts(page), {
		keepPreviousData: true,
	});

	if (isLoading) return <h1> LOADING...</h1>;

	if (isError) return <h1>Something went Wrong {error}</h1>;

	console.log(data);
	return (
		<div className="w-11/12 mx-auto">
			<div className="flex justify-between">
				<button
					className="btn  btn-error"
					onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
					disabled={page === 1}
				>
					PREV
				</button>
				<button className="btn btn-success" onClick={() => setPage((prev) => prev + 1)}>
					NEXT
				</button>
			</div>
			{data?.map((post) => {
				return (
					<div
						key={post.id}
						className="card w-full bg-primary-content text-secondary-content my-3 shadow-xl"
					>
						<div className="card-body">
							<div className="flex justify-between ">
								<h1>userID: {post.user_id}</h1>
								<h1>postID: {post.id}</h1>
							</div>
							<h1 className="card-title">{post.title}</h1>
							<p>{post.body}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
