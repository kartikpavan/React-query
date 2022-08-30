import axios from "axios";

export const fetchSinglePost = async (id) => {
	try {
		const { data } = await axios.get(`https://gorest.co.in/public/v2/posts/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
