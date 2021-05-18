import React from 'react';
import Picker from 'emoji-picker-react';
//import $ from 'jquery'

//############################################################################
        //note that the react fragment should be modified significantly for use in the a chatting app
//############################################################################

class EmojiFunction extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chosenEmoji:''
        }
        this.setChosenEmoji=this.setChosenEmoji.bind(this);
        this.onEmojiClick=this.onEmojiClick.bind(this);
    }
    setChosenEmoji(emojiObject){
        this.setState({chosenEmoji:emojiObject})
    }
    onEmojiClick(event,emojiObject){
        this.setChosenEmoji(emojiObject)
    }


render(){


    return (
        <React.Fragment>
          {chosenEmoji ? (
            <span>You chose: {this.state.chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )}
          <Picker onEmojiClick={this.onEmojiClick} />
        </React.Fragment>
      );

}


}