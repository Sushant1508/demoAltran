import React from 'react';

class TimerComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTime:new Date(),
            bgcolor1:"#27ff00",
            bgcolor2:"#00d0ff66",
            bgcolor:"#27ff00"
        }
    }

    ticker=()=>{
        this.setState({currentTime:new Date(),bgcolor:this.state.bgcolor==this.state.bgcolor1?this.state.bgcolor2:this.state.bgcolor1});
    }

    render(){
        return(
            <div style={{backgroundColor:this.state.bgcolor}}>            
            <h2><span>{this.state.currentTime.getHours()}</span><span>:</span><span>{this.state.currentTime.getMinutes()}</span><span>:</span><span>{this.state.currentTime.getSeconds()}</span></h2>
            </div>
            )
    }

    componentDidMount(){
    this.timer=setInterval(()=>this.ticker(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default TimerComponent;