import React from "react";

let divHeight;
window.setDivHeight = (height) => divHeight = height;

const Screen = (WrappedComponent) => {
  class HOC extends React.Component {
    constructor(props){
  	  super(props)
      this.state={
        width : window.innerWidth,
        height: ''
      }
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.updateDimensions = this.updateDimensions.bind(this);
  	}

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        window.setDivHeight(window.innerHeight);
        this.setState({ width: window.innerWidth });
        this.setState({ height: window.innerHeight });
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.setState({ height: e.target.value });
            window.setDivHeight(e.target.value);
        }
    }

    onChange = (e) => {
        this.setState({ height: e.target.value });
    }

    render() {
      const {width, height} = this.state;
      return (
        <div style={{"border" : "1px solid", "width": width+"px", "height" : divHeight+"px"}}>
          <span>Window Width: {width}</span>
          <WrappedComponent
            {...this.props}
            onkeyPress= {this.handleKeyPress}
            onChange= {this.onChange}
            height= {height}
          />
        </div>
      );
    }
  }

  return HOC;
};

export default Screen;
