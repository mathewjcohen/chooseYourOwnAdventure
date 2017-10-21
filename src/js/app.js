import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import Thing from './components/Thing';
import Title from './components/Title';

import "../css/style.css";

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scenarios: [
        {
          msg: "It's a bright, sunny day in Seattle. What would you like to do first?",
          end: " has resulted in you being attacked by a pack of rabid badgers. They take no prisoners. You didn't survive... and it wasn't pretty."
        },
        {
          msg: "Good morning, sunshine! You've just awaken and you get out of bed. What would you like to do first?",
          end: " has resulted in you stepping in a bear trap. You're pinned and will likely bleed out. Oh, did I mention is was electrified? Yeah, you didn't make it."
        },
        {
          msg: "Hello, Dorothy. You've just landed in Oz, picked up your ruby slippers, and met Glinda the \"Good Witch\". Now what?",
          end: " has resulted in a house landing on you. Why didn't you move out of the way? It was LITERALLY as big as a house. Oh well, karma I guess... "
        },
        {
          msg: "You find yourself in a dark room. What do you want to do first?",
          end: " has resulted in you falling into a bottomless pit. You're still falling. You'll probably be falling forever. That is unfortunate. I hope you're good company because it's going to be you and only you for a LONG time."
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Title />
        <Thing scenarios={this.state.scenarios}/>
      </div>
    );
  }
}

render(<Hello />, document.getElementById("app"));
