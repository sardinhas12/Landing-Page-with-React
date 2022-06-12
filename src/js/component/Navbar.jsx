import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid px-4">
				<a className="navbar-brand text-white" href="#">
					Navbar
				</a>
				<div className="collapse navbar-collapse px-4" id="navbarNav">
					<ul className="navbar-nav  ms-auto">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Recipe Index
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
