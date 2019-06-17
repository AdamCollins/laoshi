import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Navbar from './Navbar'
import * as serviceWorker from './serviceWorker';


class Index extends React.Component{
    state = {
        loading:true,
        cards:[]
    }
    
    nextCard = ()=>{
        this.setState({
            index: (this.state.index+1)%this.state.cards.length}
            );
    }
    componentDidMount(){
        this.setState({loading:true});
        fetch('data/vocab.json')
            .then(data=>data.json())
            .then(cards => this.setState({cards, loading:false, index:Math.floor(Math.random()*cards.length)}))
    }
    render(){
        return(
            <div>
                <Navbar brand="老师."/>
                {this.state.loading
                ?'...'
                :<Card card={this.state.cards[this.state.index]} nextCard={this.nextCard}/>
                }
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>
    ,   
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

