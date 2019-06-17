import React from 'react';
import './Character.css';
class Character extends React.Component{
    state = {size:32}

    updateSize = ()=>{
        let container = document.getElementById('CharacterContainer');
        let text = document.getElementById('Char'); 
        let width = container.clientWidth;
        let charCount = text.textContent.length;
        let scale = width/((charCount>1)? charCount*1.5:2*1.5);
        text.style.fontSize = scale + 'px'; 
    }
    componentDidMount(){
        this.updateSize();
    }

    componentDidUpdate(){
        this.updateSize();
    }
    render(){
      return <section id="CharacterContainer" className="Character">
                <h1 id="Char" >{this.props.char}</h1>
            </section>
    }
}

export default Character;