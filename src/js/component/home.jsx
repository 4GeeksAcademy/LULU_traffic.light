import React, {useState} from "react";
import TrafficLight from './TrafficLight';

//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */

//create your first component
export function Home (){

	const [ selectedColor, setSelectedColor ] = useState("Green")
	
	return (
		<div className="Traffic-light">
		  <div className={"Red" + (SelectedColor === "red" ? " glow" : "")}></div>
		  <div className={"Yellow" + (SelectedColor === "yellow" ? " glow" : "")}></div>
		  <div className={"Green" + (SelectedColor === "green" ? " glow" : "")}></div>
		</div>
	  )
	}