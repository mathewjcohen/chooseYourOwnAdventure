import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Thing extends Component {
  constructor(props){
    super(props);

    this.randNum;
    this.randomScenario = "";
    this.hideGenBtn = false;
    this.displayEnd = false;
    this.pointlessAnswer = "";
  }

  genRandNum(){
    return Math.floor(Math.random() * this.props.scenarios.length)
  }

  genRandScenario(){
    this.randomScenario = this.props.scenarios[this.genRandNum()];
    this.hideGenBtn = true;
    this.displayEnd = false;
    this.pointlessAnswer = "";
    this.forceUpdate();
  }

  submitPointlessAnswer(){
    let input = document.getElementById("answer");
    if (input.value !== ""){
      this.pointlessAnswer = input.value;
      this.displayEnd = true;
      this.hideGenBtn = false;
      input.value = "";
      this.forceUpdate();
    }
  }

  render() {
    let focus = true;
    return (
      <div id="thing">
        <div className="container">
          {!this.hideGenBtn && <button onClick={this.genRandScenario.bind(this)} className="btn">Try a Random Scenario</button>}
          {this.randomScenario.msg && <p>{this.randomScenario.msg}</p>}
          {this.displayEnd && <p id="result">Your decision to "{this.pointlessAnswer}"{this.randomScenario.end}</p>}
          <div id="input_wrap">
            {this.hideGenBtn && <input id="answer" type="text" autoFocus/>}<br />
            {this.hideGenBtn && <button onClick={this.submitPointlessAnswer.bind(this)} className="btn">submit</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default Thing;