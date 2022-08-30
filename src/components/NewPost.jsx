import React from "react";
import { Formik } from "formik";

const NewPost = () => {
	return (
		<div className="my-4 border  p-2">
			<h1 className="text-xl"> Create a New Post</h1>
			<Formik
				initialValues={{ title: "", body: "" }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
					console.log(values);
				}}
			>
				{({
					values,
					errors,
					touched,
					isSubmitting,
					handleChange,
					handleSubmit,
					handleBlur,
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="title"
							value={values.title}
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder="Title"
							className="input input-bordered w-full max-w-lg my-1"
						/>
						{errors.title && touched.title && errors.title}

						<textarea
							name="body"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.body}
							placeholder="Title"
							cols="90"
							rows="5"
							className="textarea textarea-bordered my-1"
						></textarea>
						{errors.body && touched.body && errors.body}

						<button
							type="submit"
							className="btn btn-primary w-full"
							disabled={isSubmitting}
						>
							ADD
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default NewPost;
