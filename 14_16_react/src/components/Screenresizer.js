import React from 'react'
class Screenresizer extends React.Component{
	constructor(props){
		super(props)
		this.state={
			screenWidth :  window.innerWidth , 
			screenHeight :  window.innerHeight,
			setdimentional:'',
		}
	}
	//Change screen dimantional according to input value
	getDimentions=(e)=>{
		var elmnt = document.getElementById("screenHeightWidtId")
		this.setState({setdimentional:e.target.value})
		
	}
	// call this function when resize screen 
	updateWidthAndHeight=()=>{		
		this.setState({screenWidth:window.innerWidth,screenHeight:window.innerWidth})
	}
	render(){
		window.addEventListener("resize", this.updateWidthAndHeight);
		return(
			<div className="screenHeightWidth" id="screenHeightWidtId" style={{"height" : this.state.setdimentional+"px"}}>				 
				<span>Width :{this.state.screenWidth}</span> 	
				<div className="NumberField"><input type="number" name='screencounter' onChange={this.getDimentions} /></div>				
			</div>
		)		
	}
}	

export default Screenresizer