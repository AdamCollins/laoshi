import React from 'react';
import './Navbar.css';
import GitHubButton from 'react-github-btn';

class Navbar extends React.Component{
    render(){
        return (<ul className="Navbar">
                    <li className="brand" ><a href="https://github.com/AdamCollins/laoshi">{this.props.brand}</a></li>
                    <li className="badge"><GitHubButton href="https://github.com/AdamCollins/laoshi" data-size="large" data-show-count="true" aria-label="Star AdamCollins/laoshi on GitHub">Star</GitHubButton></li>
                </ul>    
                )
    }
}


export default Navbar