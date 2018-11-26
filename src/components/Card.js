import React from 'react';

class Card extends React.Component{
constructor(props){
    super(props);

    this.state = {
    clicked: false,
    }

    this.handleClick = this.handleClick.bind(this);
}

handleClick(){
    this.setState({
    clicked: true
    })
    if(correctOrderArray[currentNumber] != this.props.type) {
    setTimeout(function() {
        this.setState({clicked: false});
        this.props.resetCurrentNumber();
    }.bind(this), 1000);
    }
    else
    this.props.incrementCurrentNumber();
}
componentWillUpdate(){
    if(this.props.currentNumber === 0)
    {
    this.setState({
        clicked: false
    })
    }
}

render(){
    if(this.state.clicked)
    return (<div className="card" id={this.props.type} />)
    else
    return (<div className="card" onClick={this.handleClick} />)
    }
}


export default Card;