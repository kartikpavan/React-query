import axios from "axios";

export default async (id) => {
	try {
		const { data } = await axios.get(`https://gorest.co.in/public/v2/posts?page=${id}`);
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
