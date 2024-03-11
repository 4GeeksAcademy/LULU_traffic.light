import React, {useState} from "react";

//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */



//create your first component
export function Home (){

	const [ selectedColor, setSelectedColor ] = useState("green")
	
	return (

		<div className="Traffic-light">

		  <div onClick={()=>{setSelectedColor("red")}} className= {"Red" + (selectedColor === "red" ? " glow" : "")}></div>
		  <div onClick={()=>{setSelectedColor("yellow")}} className= {"Yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
		  <div onClick={()=>{setSelectedColor("green")}} className= {"Green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
	  )
	}
	