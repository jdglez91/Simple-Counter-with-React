//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import PropTypes from "prop-types";

//import your own components
function SimpleCounter(props) {
	let mystyle = {
		color: "white",
		backgroundColor: "#1b1717",
		padding: "0",
		fontFamily: "Arial",
		fontSize: "70px ",
		borderRadius: "30px"
	};
	return (
		<div className="container">
			<div
				className="row text-center "
				style={{ background: "black", padding: "20px" }}>
				<div
					className="col-sm pt-5 mr-3"
					style={{ background: "#1b1717", borderRadius: "30px" }}>
					<i className="far fa-clock fa-3x " />
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitSix}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitFive}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitFour}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitThree}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitTwo}
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					{props.digitOne}
				</div>
			</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
let counter = 0;
setInterval(() => {
	const six = Math.floor(counter / 100000);

	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	ReactDOM.render(
		<SimpleCounter digitOne={counter.indexOf()} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
