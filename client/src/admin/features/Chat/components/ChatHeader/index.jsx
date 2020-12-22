import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import React from 'react';
import './style.scss';

function ChatHeader(props) {

  return (
    <div className="chat__header">
    <div className="chat__header--info">
      <h3>Đen Vâu</h3>
    </div>

    <div className="chat__header--right">
    <IconButton>
        <CallIcon />
      </IconButton>
      <IconButton>
        <VideocamIcon />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </div>
  </div>
  );
}

export default ChatHeader;