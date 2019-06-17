import React from 'react';
import './AnswerInput.css';

class AnswerInput extends React.Component{
    clear = ()=>{
        this.input.value = '';
    }
    render(){
        return(
                <section className="AnswerInput">
                    <label>
                        {this.props.label}:<span className="correct tip" > {this.props.tip}</span>
                        <input type="text" ref={input => this.input = input} onChange={this.props.onChange}></input>
                    </label>
                </section>
        )
    }
}

export default AnswerInput;