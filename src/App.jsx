import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="container mx-auto px-4">
				<h1 className="text-3xl text-center">React Query</h1>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/post/:postId" element={<Post />} />
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
