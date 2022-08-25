import React from 'react';
import OutputScreen from './OutputScreen.js';
import Button from './Button.js';
import './Style.css'

class Calculator extends React.Component {

  constructor() {
  super();
  this.state = {
    question: '',
    answer: ''
  }

  this.handleClick = this.handleClick.bind(this);
}


    render()
    {
    return (
    <div className='container'>
    <div className="frame">
    <div class="mainCalc">
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
    <div className='button d-flex flex-column align-items-center'>
      <div className="button-row top">
        <Button label={'AC'} handleClick = {this.handleClick}/>
        <Button label={'C'} handleClick = {this.handleClick}/>
        <Button label={'/'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'7'} handleClick = {this.handleClick}/>
        <Button label={'8'} handleClick = {this.handleClick}/>
        <Button label={'9'} handleClick = {this.handleClick}/>
        <Button label={'*'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'4'} handleClick = {this.handleClick}/>
        <Button label={'5'} handleClick = {this.handleClick}/>
        <Button label={'6'} handleClick = {this.handleClick}/>
        <Button label={'-'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'1'} handleClick = {this.handleClick}/>
        <Button label={'2'} handleClick = {this.handleClick}/>
        <Button label={'3'} handleClick = {this.handleClick}/>
        <Button label={'+'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row">
        <Button label={'0'} handleClick = {this.handleClick} />
        <Button label={'.'}  handleClick = {this.handleClick}/>
        <Button label={'='} handleClick = {this.handleClick}/>
      </div>
    </div>
    </div>
    </div>
    </div>
    );
  }

  handleClick(event){

    const value = event.target.value;

    switch (value) {
      case '=': {
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Math Error"});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Math Error"});
    			else
    				this.setState({ answer: ans , question: ''});
    			break;
    		}
        break;
      }
      case 'AC': {
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'C': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }

}

export default Calculator;