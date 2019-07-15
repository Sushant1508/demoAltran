import React from 'react';

class TextCustomComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            customText : this.props.customText
        }
    }

    textHandler=(e)=>{
        this.setState({customText:e.target.value},()=>console.log(this.state.customText));
    }

    render(){
        return(
            <div>
                <textarea rows="4" cols="50" defaultValue={this.state.customText} onChange={this.textHandler}>
                    
                </textarea>
            </div>
        )
    }
}

export default TextCustomComponent;