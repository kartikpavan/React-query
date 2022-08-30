import axios from "axios";

export const fetchPosts = async (id) => {
	try {
		const { data } = await axios.get(
			`https://gorest.co.in/public/v2/users/3973/posts?page=${id}`
		);
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
