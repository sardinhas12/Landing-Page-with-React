import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div>
				<Jumbotron />
				<div className="row mt-5">
					<Cards
						title="Soup"
						cardDescription="Not boring soup"
						imageUrl="https://picsum.photos/id/292/400/200"
						buttonLabel="Read Recipe"
					/>
					<Cards
						title="Salad"
						cardDescription="Colourful salad to cheer you up"
						imageUrl="https://picsum.photos/id/488/400/200"
						buttonLabel="Read Recipe"
					/>
					<Cards
						title="Cookies"
						cardDescription="Cookies are always a best option "
						imageUrl="https://picsum.photos/id/835/400/200"
						buttonLabel="Read Recipe"
					/>
					<Cards
						title="Oatmeal"
						cardDescription="Oats to keep you in good spirits all morning"
						imageUrl="https://picsum.photos/id/493/400/200"
						buttonLabel="Read Recipe"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
