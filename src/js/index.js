//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	let mystyle = {
		color: "white",
		backgroundColor: "gray",
		padding: "10px",
		fontFamily: "Arial",
		fontSize: "40px "
	};
	return (
		<div className="container">
			<div className="row text-center " style={{ background: "black" }}>
				<div className="col-sm pt-5 mr-3">
					<i className="far fa-clock fa-3x " />
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					6
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					5
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					4
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					3
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					2
				</div>
				<div className="col-sm pt-5 mr-3" style={mystyle}>
					1
				</div>
			</div>
		</div>
	);
}
//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
