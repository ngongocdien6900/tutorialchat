import React from 'react';
import ChatBody from './components/ChatBody';
import ChatFooter from './components/ChatFooter';
import ChatHeader from './components/ChatHeader';
import './style.scss';

function ChatFeature() {

  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody/>
      <ChatFooter/>
    </div>
  );
}

export default ChatFeature;
