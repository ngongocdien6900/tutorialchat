import CollectionsIcon from '@material-ui/icons/Collections';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React from 'react';
import './style.scss';

ChatFooter.propTypes = {
  
};

ChatFooter.defaultProps = {

};

function ChatFooter(props) {

  return (
    <div className="chat__footer">
      <InsertEmoticonIcon />
      <CollectionsIcon />
      <form>
        <input 
          placeholder="Type a message" 
          type="text" 
          />
        <button type="submit">Send a message</button>
      </form>
    </div>
  );
}

export default ChatFooter;
