import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
	return (
		<div className="col-12 col-sm-3 mb-2 p-2">
			<div
				className="card border border border-secondary"
				style={props.cardStyle}>
				<img src={props.imageUrl} className="card-img-top" alt=" " />
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.cardDescription}</p>
					<a
						href={props.buttonUrl}
						className="btn btn-outline-dark btn-sm">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
