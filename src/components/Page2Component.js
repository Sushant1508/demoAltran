import React from 'react';
import TimerComponent from './TimerComponent';

class CustomComponent2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTime:new Date()
        }
    }

    render(){
        return(
            <div>
                <br/>
                <header style={{fontSize:22}}>Hey, This component shows the current time !</header>
                <br/>
                <TimerComponent />
            </div>
        );
    }


}

export default CustomComponent2;