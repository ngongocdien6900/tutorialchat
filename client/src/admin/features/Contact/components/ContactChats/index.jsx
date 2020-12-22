import React from 'react';
import './style.scss';

ContactChats.propTypes = {};

ContactChats.defaultProps = {};

function ContactChats(props) {
  return (
    <div className="contact__chats">
      <div className="contactChat">
        <div className="contactChat__info">
          <h2>Đen Vâu</h2>
          <p>Đang làm gì đó</p>
        </div>
      </div>

      <div className="contactChat">
        <div className="contactChat__info">
          <h2>Sơn Tùng MTP</h2>
          <p>Chào bạn</p>
        </div>
      </div>

      <div className="contactChat">
        <div className="contactChat__info">
          <h2>QTV</h2>
          <p>Không làm gì hết</p>
        </div>
      </div>
    </div>
  );
}

export default ContactChats;
