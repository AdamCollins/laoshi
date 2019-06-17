import React from 'react';
import Character from './Character'
import Input from './AnswerInput'
import './Card.css';


const wait = (t, cb) => {
  setTimeout(cb, t*1000);
}

const toCamelCase = (s)=>{
  console.log(typeof s)
  if(s.length>0)
    s = s.charAt(0).toUpperCase() + s.substring(1);

  return s;
}

class Card extends React.Component {
  state = {
    show:true,
    pinyinAnswer: '',
    pinyinTip:'',
    englishAnswer: '',
    englishTip:''
  }

  updatePinyin = (e)=>{
    this.setState({pinyinAnswer:e.target.value.toLowerCase()});
  }

  
  updateTranslation = (e)=>{
    this.setState({englishAnswer:e.target.value.toLowerCase()});
  }


  check = (e)=>{
    e.preventDefault();
    document.activeElement.blur();

    let pinyinValid = this.props.card.pinyin.includes(this.state.pinyinAnswer);
    let englishValid = this.props.card.english.includes(this.state.englishAnswer);

    this.setState({pinyinTip:toCamelCase(this.props.card.pinyin[0])});
    this.setState({englishTip:toCamelCase(this.props.card.english[0])});

    let valid = pinyinValid && englishValid;
    wait(0.5,()=>{
      if(valid){
        this.setState({
          show:false
        }, ()=>{
          wait(0.5,()=>{
            this.props.nextCard();
            this.setState({
                show: true,
                pinyinTip: '',
                englishTip: ''
              });
              this.pinyinInput.clear();
              this.englishInput.clear();
          });
        });
    }
    });
  }
  render(){
    return (
      <div className={`Card ${this.state.show?'slide-in':'slide-out'}`} >
          <Character char={this.props.card.character}/>
          <form>
            <Input label="Pinyin" onChange={this.updatePinyin} ref={input => this.pinyinInput = input} tip={this.state.pinyinTip} />
            <Input label="Translation" onChange={this.updateTranslation} ref={input => this.englishInput = input} tip={this.state.englishTip}/>
            <button type="submit" onClick={this.check} >Check</button>
          </form>
      </div>
    );
  }
}

export default Card;
