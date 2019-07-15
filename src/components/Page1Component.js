import React from 'react';
import TextCustomComponent from './TextComponent';

class CustomComponent1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            text: "Hi, You are in tab1. This text is passed from parent as props. You can edit this text & it would be maintained in component's local state."
        }
    }

    render(){
        return(
            <div>
                <br/>
                <header style={{fontSize:22}}>Hey, this tab uses another custom component called <i>TextCustomComponent</i></header>
                <br/>
                <TextCustomComponent  customText={this.state.text}/>
            </div>
        )
    }
}

export default CustomComponent1;