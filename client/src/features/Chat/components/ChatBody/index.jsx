import React from 'react';
import './styles.scss';

ChatBody.propTypes = {

};

ChatBody.defaultProps = {

};

function ChatBody(props) {
  
  return (
    <div className="chat__body" >
      <p
        className='chat__message chat__reciver'
      >
        <span className="chat__name">Đen Vâu</span>
        Em dạo này khỏe không, còn đi làm ở công ty cũ?
        <span className="chat__timestamp">14h 20p</span>
      </p>

      <p
        className='chat__message'
      >
        <span className="chat__name">Điện</span>
        Chào bạn
        <span className="chat__timestamp">14h 20p</span>
      </p>
    </div>
  );
}

export default ChatBody;
