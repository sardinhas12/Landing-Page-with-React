import React from "react";
const Jumbotron = () => {
	return (
		<div className="rounded-3 text-center text-dark border mb-4 p-5 bg-light">
			<h1 className="display-4 fs-1 fw-bold">Welcome!</h1>
			<p className="lead fw-normal">
				Love cooking but also find yourself being lazy about cooking?
			</p>
			<p>
				We've gathered 55 ridiculously easy lazy recipes to save you
				when you just don't feel like cooking.
			</p>
			<p class="lead">
				<a class="btn btn-outline-dark btn-md" href="#" role="button">
					Discover
				</a>
			</p>
		</div>
	);
};
export default Jumbotron;
