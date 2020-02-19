import React from 'react';
import Screen from './Screen';

class InputBox extends React.Component {
  constructor(props){
    super(props)
    this.state={
      height : this.props.height
    }
  }
  
  render(){
    const { onkeyPress, onChange, height } = this.props;
	return(
      <div>
        <input
          type="text"
          value={height}
          onKeyPress={onkeyPress}
          onChange={onChange}
        />
      </div>
    )
  }
}
const App = Screen(InputBox);

export default App;
